"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagnModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const vagn_controller_1 = require("./vagn.controller");
const vagnService_1 = require("./vagnService");
let VagnModule = class VagnModule {
};
exports.VagnModule = VagnModule;
exports.VagnModule = VagnModule = __decorate([
    (0, common_1.Module)({
        controllers: [vagn_controller_1.VagnController],
        providers: [vagnService_1.VagnService, prisma_service_1.PrismaService],
    })
], VagnModule);
//# sourceMappingURL=vagn.module.js.map