import { PrismaService } from 'src/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
export declare class StationService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): any[] | import(".prisma/client").Prisma.PrismaPromise<{
        station_inside_code: number;
        station_inside_name: string;
    }[]>;
    createStation(dto: CreateStationDto): Promise<{
        station_inside_code: number;
        station_inside_name: string;
    }>;
    deleteStation(id: string): Promise<{
        station_inside_code: number;
        station_inside_name: string;
    }>;
}
