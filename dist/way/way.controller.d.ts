import { CreateWayDto } from './way.dto';
import { WayService } from './way.service';
export declare class WayController {
    private readonly wayService;
    constructor(wayService: WayService);
    getWay(): Promise<{
        way_code: string;
    }[]>;
    create(dto: CreateWayDto): Promise<void>;
    delete(id: string): Promise<{
        way_code: string;
    }>;
}
