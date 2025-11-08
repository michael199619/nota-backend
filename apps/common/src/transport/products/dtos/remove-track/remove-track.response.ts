import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class RemoveTrackResponse {
    @ApiProperty({
        enum: HttpStatus,
        description: 'Статус',
        example: HttpStatus.OK
    })
    success: HttpStatus;
}