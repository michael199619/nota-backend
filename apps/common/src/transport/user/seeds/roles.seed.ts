import { RoleName } from "../constants";

export const roles: Record<RoleName, { id: string, name: RoleName }> = {
    [RoleName.ADMIN]: {
        id: '2412a97a-5e55-417e-b13f-094614c783f9',
        name: RoleName.ADMIN
    },
    [RoleName.PERFUMER]: {
        id: 'd8b7b044-2489-40a7-8fd5-7ad9503c0bbd',
        name: RoleName.PERFUMER
    },
    [RoleName.WATCHING]: {
        id: '07f12545-0422-42ec-b802-0fb3d1a5a43d',
        name: RoleName.WATCHING
    }
}