import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { DocService } from 'src/doc/doc.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private jwt;
    private userService;
    private prisma;
    private docService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(jwt: JwtService, userService: UserService, prisma: PrismaService, docService: DocService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            post: import(".prisma/client").$Enums.Post;
        };
        docs: {
            ndoc: string;
            station_otpr: string;
            station_nazn: string;
            notpr: string;
            npol: string;
            way_code: string;
            dat_oform: string;
            dat_ceh_otpr: string;
            dat_st_otpr: string;
            dat_st_nazn: string;
            dat_ceh_nazn: string;
            usr_ceh_otpr: string;
            usr_st_otpr: string;
            usr_st_nazn: string;
            usr_ceh_nazn: string;
            num_doc: number;
            user_id: string;
            status: string;
        }[];
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            post: import(".prisma/client").$Enums.Post;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            post: import(".prisma/client").$Enums.Post;
        };
    }>;
    private issueTokens;
    private validateUser;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
