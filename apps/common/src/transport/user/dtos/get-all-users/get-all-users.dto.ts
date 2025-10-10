import { PaginationDto } from "@perfume-platform/common/utils";

export class GetAllUsersDto extends PaginationDto {
    search: string;
}