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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagonsController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const create_vagon_dto_1 = require("./dto/create-vagon.dto");
const vagons_service_1 = require("./vagons.service");
let VagonsController = class VagonsController {
    constructor(vagonsService) {
        this.vagonsService = vagonsService;
    }
    async getAll() {
        return this.vagonsService.getAll();
    }
    async getSelectStation(dto) {
        return this.vagonsService.createVagons(dto);
    }
    async deleteVagn(id) {
        return this.vagonsService.deleteTovar(id);
    }
};
exports.VagonsController = VagonsController;
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VagonsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vagon_dto_1.CreateVagonDto]),
    __metadata("design:returntype", Promise)
], VagonsController.prototype, "getSelectStation", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VagonsController.prototype, "deleteVagn", null);
exports.VagonsController = VagonsController = __decorate([
    (0, common_1.Controller)('vagons'),
    __metadata("design:paramtypes", [vagons_service_1.VagonsService])
], VagonsController);
//# sourceMappingURL=vagons.controller.js.map