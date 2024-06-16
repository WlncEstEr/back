"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DocService = class DocService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getByNDOC(id) {
        const unicNdoc = this.prisma.transDoc.findUnique({
            where: {
                num_doc: id,
            },
        });
        if (!unicNdoc)
            throw new common_1.NotFoundException('Not found!');
        return unicNdoc;
    }
    getLastNDOC() {
        const unicNdoc = this.prisma.transDoc.findFirst({
            select: {
                ndoc: true,
            },
            orderBy: {
                num_doc: 'asc',
            },
            take: -1,
        });
        return unicNdoc;
    }
    async getAll() {
        return {
            docs: await this.prisma.transDoc.findMany({
                orderBy: { ndoc: 'asc' },
            }),
        };
    }
    async getDocForOneUser(id) {
        return await this.prisma.transDoc.findMany({
            where: {
                user_id: id,
            },
            orderBy: { ndoc: 'asc' },
        });
    }
    async creacteDoc(dto) {
        const lastdoc = await this.getLastNDOC();
        let leng = Number(lastdoc.ndoc) + 1;
        function lastDoc() {
            switch (String(leng).length) {
                case 1:
                    return '000000000' + leng;
                case 2:
                    return '00000000' + leng;
                case 3:
                    return '0000000' + leng;
                case 4:
                    return '000000' + leng;
                case 5:
                    return '00000' + leng;
                case 6:
                    return '0000' + leng;
                case 7:
                    return '000' + leng;
                case 8:
                    return '00' + leng;
                case 9:
                    return '0' + leng;
                case 10:
                    return String(leng);
            }
        }
        const doc = {
            ndoc: lastDoc(),
            station_otpr: dto.station_otpr,
            station_nazn: dto.station_otpr,
            notpr: dto.notpr,
            npol: dto.npol,
            way_code: dto.way_code,
            dat_oform: dto.dat_oform,
            dat_ceh_otpr: dto.dat_ceh_otpr,
            dat_st_otpr: dto.dat_st_otpr,
            dat_st_nazn: dto.dat_st_nazn,
            dat_ceh_nazn: dto.dat_ceh_nazn,
            usr_ceh_otpr: dto.usr_ceh_otpr,
            usr_st_otpr: dto.usr_st_otpr,
            usr_st_nazn: dto.usr_st_nazn,
            usr_ceh_nazn: dto.usr_ceh_nazn,
            num_doc: leng,
            user_id: dto.user_id,
            status: dto.status,
        };
        return this.prisma.transDoc.create({
            data: doc,
        });
    }
    async deleteDoc(ndoc) {
        return await this.prisma.transDoc.delete({
            where: {
                ndoc: ndoc,
            },
        });
    }
    async updateDoc(ndoc, dto) {
        return this.prisma.transDoc.update({
            where: {
                ndoc: ndoc,
            },
            data: dto,
        });
    }
};
exports.DocService = DocService;
exports.DocService = DocService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocService);
//# sourceMappingURL=doc.service.js.map