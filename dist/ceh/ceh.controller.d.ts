import { CehService } from './ceh.service';
import { CreateCehDto } from './dto/create-ceh.dto';
export declare class CehController {
    private readonly cehService;
    constructor(cehService: CehService);
    getAll(): Promise<{
        kceh: number;
        nceh: string;
        shceh: string;
    }[]>;
    getSelectStation(dto: CreateCehDto): Promise<{
        kceh: number;
        nceh: string;
        shceh: string;
    }>;
    deleteVagn(id: string): Promise<{
        kceh: number;
        nceh: string;
        shceh: string;
    }>;
}
