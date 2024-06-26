import { PrismaService } from 'src/prisma.service';
import { CreateVagnDto } from './dto/create-vagn.dto';
export declare class VagnService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(ndoc: string): import(".prisma/client").Prisma.PrismaPromise<{
        ndoc: string;
        id: string;
        inside_load_code: string;
        nvag: number;
        gpod: string;
        kodtvag: string;
        vesvag: string;
        ves_grotp: string;
        ves_proves: string;
        dat_ceh_otpr: string;
        dat_st_otpr: string;
        dat_st_nazn: string;
        dat_ceh_nazn: string;
        usr_ceh_otpr: string;
        usr_st_otpr: string;
        usr_st_nazn: string;
        usr_ceh_nazn: string;
        num_doc: number;
    }[]>;
    getAll(): Promise<{
        ndoc: string;
        id: string;
        inside_load_code: string;
        nvag: number;
        gpod: string;
        kodtvag: string;
        vesvag: string;
        ves_grotp: string;
        ves_proves: string;
        dat_ceh_otpr: string;
        dat_st_otpr: string;
        dat_st_nazn: string;
        dat_ceh_nazn: string;
        usr_ceh_otpr: string;
        usr_st_otpr: string;
        usr_st_nazn: string;
        usr_ceh_nazn: string;
        num_doc: number;
    }[]>;
    creacteVag(dto: CreateVagnDto): Promise<{
        ndoc: string;
        id: string;
        inside_load_code: string;
        nvag: number;
        gpod: string;
        kodtvag: string;
        vesvag: string;
        ves_grotp: string;
        ves_proves: string;
        dat_ceh_otpr: string;
        dat_st_otpr: string;
        dat_st_nazn: string;
        dat_ceh_nazn: string;
        usr_ceh_otpr: string;
        usr_st_otpr: string;
        usr_st_nazn: string;
        usr_ceh_nazn: string;
        num_doc: number;
    }>;
    deleteVag(id: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
