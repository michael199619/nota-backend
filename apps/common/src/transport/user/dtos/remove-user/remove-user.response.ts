import { ApiProperty } from "@nestjs/swagger";

export class RemoveUserResponse {
    @ApiProperty({
        description: 'Статус',
        example: 'success'
    })
    status: string;
}