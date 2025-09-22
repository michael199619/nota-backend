import { IsString } from "class-validator";

export class IUserGet {
    @IsString()
    id: string
}