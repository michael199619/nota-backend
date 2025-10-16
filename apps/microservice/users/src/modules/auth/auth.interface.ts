export interface RefreshPayload {
    sub: string;
    jti: string;
    iat?: number;
    exp?: number;
};
