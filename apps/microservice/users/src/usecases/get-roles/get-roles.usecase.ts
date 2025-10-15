import { Injectable } from "@nestjs/common";
import { GetRolesDto, GetRolesResponse, IUserController, Usecase } from "@perfume-platform/common";
import { RolesRepository } from "../../db/roles/roles.repository";

@Injectable()
export class GetRolesUsecase extends Usecase<IUserController['getRoles']> {
    constructor(
        private readonly rolesRepository: RolesRepository
    ) {
        super()
    }

    public excecute(dto: GetRolesDto) {
        return super.excecute(dto)
    }

    async handler(dto: GetRolesDto): Promise<GetRolesResponse> {
        return await this.rolesRepository.getRoles(dto);
    }
}
