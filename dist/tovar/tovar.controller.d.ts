import { CreateTovarDto } from './dto/create-tovar.dto';
import { TovarService } from './tovar.service';
export declare class TovarController {
    private readonly tovarService;
    constructor(tovarService: TovarService);
    getAll(): Promise<{
        inside_load_code: number;
        inside_load_name: string;
    }[]>;
    getSelectStation(dto: CreateTovarDto): Promise<{
        inside_load_code: number;
        inside_load_name: string;
    }>;
    deleteVagn(id: string): Promise<{
        inside_load_code: number;
        inside_load_name: string;
    }>;
}
