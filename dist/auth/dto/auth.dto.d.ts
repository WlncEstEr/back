import { Post } from '@prisma/client';
export declare class AuthDto {
    email: string;
    password: string;
    name: string;
    phone: string;
    post?: Post;
}
