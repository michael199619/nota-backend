import { OmitType } from "@nestjs/swagger";
import { CreatePerfumeDto } from "@perfume-platform/common";

export class AdminCreatePerfumeDto extends OmitType(CreatePerfumeDto,['authorId']) {

}

