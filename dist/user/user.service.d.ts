import { AuthDto } from 'src/auth/dto/auth.dto';
import { DocService } from 'src/doc/doc.service';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    private docService;
    constructor(prisma: PrismaService, docService: DocService);
    getAllUser(): Promise<{
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }>;
    lenghtUser(): Promise<boolean>;
    getByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getProfile(id: string): Promise<{
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
    create(dto: AuthDto): Promise<{
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }>;
    update(id: string, dto: UserDto): Promise<{
        name: string;
        email: string;
        phone: string;
        post: import(".prisma/client").$Enums.Post;
    }>;
}
