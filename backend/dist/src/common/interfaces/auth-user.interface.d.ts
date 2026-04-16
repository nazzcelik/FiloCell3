import { Role } from '../enums/role.enum';
export interface AuthUser {
    id: string;
    companyId: string;
    email: string;
    fullName: string;
    role: Role;
}
export interface JwtPayload {
    sub: string;
    companyId: string;
    role: Role;
}
