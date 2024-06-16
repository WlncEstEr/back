import { PrismaService } from 'src/prisma.service';
import { CreateWayDto } from './way.dto';
export declare class WayService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        way_code: string;
    }[]>;
    create(dto: CreateWayDto): Promise<void>;
    delete(id: string): Promise<{
        way_code: string;
    }>;
}
