import { PrismaClient } from 'prisma_types/products';
export * from 'prisma_types/products';
declare const PrismaService_base: {
    new (...clientParams: [optionsArg?: import("prisma_types/products").Prisma.Subset<import("prisma_types/products").Prisma.PrismaClientOptions, import("prisma_types/products").Prisma.PrismaClientOptions> | undefined] | any): {
        logger: import("@nestjs/common").Logger;
        seed(..._: unknown[]): Promise<any>;
        onApplicationBootstrap(): Promise<void>;
        onApplicationShutdown(signal?: string | undefined): Promise<void>;
        connect(): Promise<void>;
        enableShutdownHooks(app: import("@nestjs/common").INestApplication): Promise<void>;
        isQueryEvent(event: import("@perfume-platform/common/database/prisma.interfaces").BasePrismaQueryEvent | import("@perfume-platform/common/database/prisma.interfaces").BasePrismaLogEvent | (() => Promise<void>)): event is import("@perfume-platform/common/database/prisma.interfaces").BasePrismaQueryEvent;
        initQueryLog(): void;
        $connect(): Promise<void>;
        $disconnect(): Promise<void>;
        $on(eventName: unknown, cb: (event: import("@perfume-platform/common/database/prisma.interfaces").BasePrismaServiceEvent, ...args: unknown[]) => void): void;
    };
} & typeof PrismaClient;
export declare class PrismaService extends PrismaService_base {
    constructor();
    seed(): Promise<void>;
}
