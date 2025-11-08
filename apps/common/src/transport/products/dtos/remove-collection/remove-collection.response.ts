import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class RemoveCollectionResponse {
    @ApiProperty({
        enum: HttpStatus,
        description: 'Статус удаления',
        example: HttpStatus.OK
    })
    status: HttpStatus;
}