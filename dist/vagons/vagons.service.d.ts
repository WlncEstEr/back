import { PrismaService } from 'src/prisma.service';
import { CreateVagonDto } from './dto/create-vagon.dto';
export declare class VagonsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        nvag: number;
        kodtvag: string;
        gpod: string;
        vesvag: string;
        ves_grotp: string;
    }[]>;
    createVagons(dto: CreateVagonDto): Promise<{
        nvag: number;
        kodtvag: string;
        gpod: string;
        vesvag: string;
        ves_grotp: string;
    }>;
    deleteTovar(id: string): Promise<{
        nvag: number;
        kodtvag: string;
        gpod: string;
        vesvag: string;
        ves_grotp: string;
    }>;
}
