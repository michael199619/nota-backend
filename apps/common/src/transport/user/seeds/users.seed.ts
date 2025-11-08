import { RoleName } from "../constants";
import { CreateUserDto } from "../dtos";
import { roles } from "./roles.seed";

export const users: (CreateUserDto & {id: string})[] = [{
    id: 'b731b533-49f6-467f-b473-1ce3574f7639',
    name: 'michael',
    login: 'michael',
    password: 'michael',
    phone: '+79000000000',
    email: 'user@yandex.ru',
    roleId: roles[RoleName.ADMIN].id
},
{
    id: 'b731b533-49f6-467f-b473-1ce3574f7638',
    name: 'yara',
    login: 'yara',
    password: 'yara',
    phone: '+79000000000',
    email: 'user2@yandex.ru',
    roleId: roles[RoleName.ADMIN].id
}]