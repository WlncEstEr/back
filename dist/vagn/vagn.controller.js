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
exports.VagnController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const create_vagn_dto_1 = require("./dto/create-vagn.dto");
const vagnService_1 = require("./vagnService");
let VagnController = class VagnController {
    constructor(vagnService) {
        this.vagnService = vagnService;
    }
    async getVagonsAll() {
        return this.vagnService.getAll();
    }
    async getVagonsOnId(ndoc) {
        return this.vagnService.getById(ndoc);
    }
    async createVagn(dto) {
        return this.vagnService.creacteVag(dto);
    }
    async deleteVagn(id) {
        return this.vagnService.deleteVag(id);
    }
};
exports.VagnController = VagnController;
__decorate([
    (0, common_1.Get)(''),
    (0, auth_decorator_1.Auth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VagnController.prototype, "getVagonsAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VagnController.prototype, "getVagonsOnId", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vagn_dto_1.CreateVagnDto]),
    __metadata("design:returntype", Promise)
], VagnController.prototype, "createVagn", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VagnController.prototype, "deleteVagn", null);
exports.VagnController = VagnController = __decorate([
    (0, common_1.Controller)('vagn'),
    __metadata("design:paramtypes", [vagnService_1.VagnService])
], VagnController);
//# sourceMappingURL=vagn.controller.js.map