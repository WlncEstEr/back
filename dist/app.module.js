"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const ceh_module_1 = require("./ceh/ceh.module");
const doc_module_1 = require("./doc/doc.module");
const station_module_1 = require("./station/station.module");
const tovar_module_1 = require("./tovar/tovar.module");
const user_module_1 = require("./user/user.module");
const vagn_module_1 = require("./vagn/vagn.module");
const vagons_module_1 = require("./vagons/vagons.module");
const way_module_1 = require("./way/way.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            doc_module_1.DocModule,
            station_module_1.StationModule,
            tovar_module_1.TovarModule,
            vagn_module_1.VagnModule,
            vagons_module_1.VagonsModule,
            ceh_module_1.CehModule,
            way_module_1.WayModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map