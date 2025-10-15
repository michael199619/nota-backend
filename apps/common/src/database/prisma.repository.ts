
import { PaginationDto, PaginationResponse } from '../utils';
import {
  BasePrismaClient,
  BaseTransactionClient,
  BaseTransactionIsolationLevel,
  BaseTransactionOptions,
  PrismaClientWithTransaction,
} from './prisma.interfaces';

export abstract class PrismaRepository<
  PrismaServiceType extends BasePrismaClient,
  TransactionClient extends BaseTransactionClient,
  TransactionIsolationLevel extends BaseTransactionIsolationLevel = BaseTransactionIsolationLevel,
> {
  constructor(
    protected readonly prisma: PrismaClientWithTransaction<
      PrismaServiceType,
      TransactionClient,
      TransactionIsolationLevel
    >,
  ) { }

  /**
   * Необходим для обеспечения единообразия в прототипах методов репозитория и исключения возникновения неочевидных багов, когда вызывается метод transaction с обычным `PrismaClient` (this.prisma), а не `Prisma.TransactionClient`
   */
  protected getContext(
    tx:
      | TransactionClient
      | Omit<
        PrismaClientWithTransaction<
          PrismaServiceType,
          TransactionClient,
          TransactionIsolationLevel
        >,
        '$transaction'
      > = this.prisma,
  ) {
    return tx as TransactionClient;
  }

  /**
   * Метод-обёртка над транзакциями
   * @param tx если `undefined` - стартует новую транзакцию, иначе исполняет `cb` в контексте переданной
   * @param cb коллбэк-функция с запросами к БД, которые должны выполниться в транзакции
   * @param options опции транзакции, применяются только для новой транзакции
   * @returns результат `cb`
   */
  public async transaction<R>(
    tx: TransactionClient | undefined,
    cb: (tx: TransactionClient) => Promise<R>,
    options?: BaseTransactionOptions<TransactionIsolationLevel>,
  ) {
    if (!tx) {
      return this.prisma.$transaction<R>(async tx => cb(tx), options);
    }
    return cb(tx);
  }

  public preparePagination(pagination: PaginationDto): {
    skip?: number;
    take?: number;
  } {
    const page = Math.round(pagination.page);
    const take = Math.round(pagination.limit);

    return { take, skip: (page - 1) * take };
  }

  public paginationResponse<T>({
    data,
    total,
    take,
    page,
  }: {
    data: T[];
    total: number;
    take?: number;
    page?: number;
  }): PaginationResponse<T> {
    return {
      data,
      perPage: take ?? total,
      pageCount: take ? Math.ceil(total / take) : 1,
      total,
      page: page ?? 1,
    };
  }

  public getContains<Values extends object, K extends keyof Values = keyof Values>(key: K, value?: string) {
    if (value) {
      return {
        [key]: {
          contains: value
        }
      }
    }

    return;
  }
}
