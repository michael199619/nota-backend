import { PaginationDto } from "../../../../utils";

export class GetAllUsersDto extends PaginationDto {
    search: string;
}