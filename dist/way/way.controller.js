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
exports.WayController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const way_dto_1 = require("./way.dto");
const way_service_1 = require("./way.service");
let WayController = class WayController {
    constructor(wayService) {
        this.wayService = wayService;
    }
    async getWay() {
        return this.wayService.getAll();
    }
    async create(dto) {
        return this.wayService.create(dto);
    }
    async delete(id) {
        return this.wayService.delete(id);
    }
};
exports.WayController = WayController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WayController.prototype, "getWay", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [way_dto_1.CreateWayDto]),
    __metadata("design:returntype", Promise)
], WayController.prototype, "create", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WayController.prototype, "delete", null);
exports.WayController = WayController = __decorate([
    (0, common_1.Controller)('way'),
    __metadata("design:paramtypes", [way_service_1.WayService])
], WayController);
//# sourceMappingURL=way.controller.js.map