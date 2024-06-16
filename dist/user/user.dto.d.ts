import { Post } from '@prisma/client';
export declare class UserDto {
    email?: string;
    name?: string;
    phone?: string;
    post?: Post;
    password?: string;
}
