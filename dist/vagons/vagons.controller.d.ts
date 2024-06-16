import { CreateVagonDto } from './dto/create-vagon.dto';
import { VagonsService } from './vagons.service';
export declare class VagonsController {
    private readonly vagonsService;
    constructor(vagonsService: VagonsService);
    getAll(): Promise<{
        nvag: number;
        kodtvag: string;
        gpod: string;
        vesvag: string;
        ves_grotp: string;
    }[]>;
    getSelectStation(dto: CreateVagonDto): Promise<{
        nvag: number;
        kodtvag: string;
        gpod: string;
        vesvag: string;
        ves_grotp: string;
    }>;
    deleteVagn(id: string): Promise<{
        nvag: number;
        kodtvag: string;
        gpod: string;
        vesvag: string;
        ves_grotp: string;
    }>;
}
