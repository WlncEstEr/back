/// <reference types="cookie-parser" />
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
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
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            post: import(".prisma/client").$Enums.Post;
        };
    }>;
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            post: import(".prisma/client").$Enums.Post;
        };
    }>;
    logout(res: Response): Promise<boolean>;
}
