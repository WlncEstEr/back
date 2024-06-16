"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagonsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const vagons_controller_1 = require("./vagons.controller");
const vagons_service_1 = require("./vagons.service");
let VagonsModule = class VagonsModule {
};
exports.VagonsModule = VagonsModule;
exports.VagonsModule = VagonsModule = __decorate([
    (0, common_1.Module)({
        controllers: [vagons_controller_1.VagonsController],
        providers: [vagons_service_1.VagonsService, prisma_service_1.PrismaService],
    })
], VagonsModule);
//# sourceMappingURL=vagons.module.js.map