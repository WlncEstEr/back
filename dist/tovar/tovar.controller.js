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
exports.TovarController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const create_tovar_dto_1 = require("./dto/create-tovar.dto");
const tovar_service_1 = require("./tovar.service");
let TovarController = class TovarController {
    constructor(tovarService) {
        this.tovarService = tovarService;
    }
    async getAll() {
        return this.tovarService.getAll();
    }
    async getSelectStation(dto) {
        return this.tovarService.createTovar(dto);
    }
    async deleteVagn(id) {
        return this.tovarService.deleteTovar(id);
    }
};
exports.TovarController = TovarController;
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Auth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TovarController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tovar_dto_1.CreateTovarDto]),
    __metadata("design:returntype", Promise)
], TovarController.prototype, "getSelectStation", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TovarController.prototype, "deleteVagn", null);
exports.TovarController = TovarController = __decorate([
    (0, common_1.Controller)('tovar'),
    __metadata("design:paramtypes", [tovar_service_1.TovarService])
], TovarController);
//# sourceMappingURL=tovar.controller.js.map