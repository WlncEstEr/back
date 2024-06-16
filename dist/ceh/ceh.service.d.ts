import { PrismaService } from 'src/prisma.service';
import { CreateCehDto } from './dto/create-ceh.dto';
export declare class CehService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        kceh: number;
        nceh: string;
        shceh: string;
    }[]>;
    createCeh(dto: CreateCehDto): Promise<{
        kceh: number;
        nceh: string;
        shceh: string;
    }>;
    deleteCeh(id: string): Promise<{
        kceh: number;
        nceh: string;
        shceh: string;
    }>;
}
