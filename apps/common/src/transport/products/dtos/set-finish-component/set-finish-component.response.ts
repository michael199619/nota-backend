import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class SetFinishComponentResponse {
    @ApiProperty({
        enum: HttpStatus,
        description: 'Статус удаления',
        example: HttpStatus.OK
    })
    status: HttpStatus;
}