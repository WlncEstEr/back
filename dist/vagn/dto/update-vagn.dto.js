"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVagnDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vagn_dto_1 = require("./create-vagn.dto");
class UpdateVagnDto extends (0, mapped_types_1.PartialType)(create_vagn_dto_1.CreateVagnDto) {
}
exports.UpdateVagnDto = UpdateVagnDto;
//# sourceMappingURL=update-vagn.dto.js.map