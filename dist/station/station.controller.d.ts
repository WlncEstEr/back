import { CreateStationDto } from './dto/create-station.dto';
import { StationService } from './station.service';
export declare class StationController {
    private readonly stationService;
    constructor(stationService: StationService);
    getAllStation(): Promise<any[] | {
        station_inside_code: number;
        station_inside_name: string;
    }[]>;
    getSelectStation(dto: CreateStationDto): Promise<{
        station_inside_code: number;
        station_inside_name: string;
    }>;
    deleteVagn(id: string): Promise<{
        station_inside_code: number;
        station_inside_name: string;
    }>;
}
