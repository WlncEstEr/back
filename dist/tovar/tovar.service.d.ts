import { PrismaService } from 'src/prisma.service';
import { CreateTovarDto } from './dto/create-tovar.dto';
export declare class TovarService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        inside_load_code: number;
        inside_load_name: string;
    }[]>;
    createTovar(dto: CreateTovarDto): Promise<{
        inside_load_code: number;
        inside_load_name: string;
    }>;
    deleteTovar(id: string): Promise<{
        inside_load_code: number;
        inside_load_name: string;
    }>;
}
