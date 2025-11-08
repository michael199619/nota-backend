export const TRANSPORT_USER_KAFKA='TRANSPORT_USER_KAFKA';
export const TRANSPORT_USER_NATS='TRANSPORT_USER_NATS';
export const TRASPORT_USER_GROUP='TRANSPORT_USER_GROUP';

export enum UserTopics {
    addSalaryUser='add.salary.user',
    changeRoleUser='change.salary.user',
    createUser='create.user',
    editUser='edit.user',
    removeSalaryUser='remove.salary.user',
    removeUser='remove.user',
}

export enum UserSubject {
    changePasswordUser='change.password.user',
    loginUser='login.user',
    logoutUser='logout.user',
    refreshTokenUser='refresh.token.user',
    getAllUses='get.all.users',
    getRoles='get.roles',
    getSalaryUser='get.salary.user',
    getSalaryUsers='get.salary.users',
    getUser='get.user'
}

export enum RoleName {
    ADMIN='admin',
    PERFUMER='perfumer',
    WATCHING='watching'
}

export enum SalaryValueType {
    CURRENCY='CURRENCY',
    PROCENT='PROCENT'
}

export enum SalaryType {
    FIX='FIX',
    SALE_ALL_PRODUCT='SALE_ALL_PRODUCT',
    SALE_OWN_PRODUCT='SALE_OWN_PRODUCT'
}

export const userTopics=Object.values(UserTopics);