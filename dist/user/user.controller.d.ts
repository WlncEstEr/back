import { UserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    profile(id: string): Promise<{
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
    lengthUser(): Promise<boolean>;
    allUsers(): Promise<{
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }[]>;
    updateProfile(id: string, dto: UserDto): Promise<{
        name: string;
        email: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }>;
}
