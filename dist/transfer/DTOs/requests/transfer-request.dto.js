"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const transfer_dto_1 = require("../common/transfer.dto");
class BookRequestDto extends (0, swagger_1.OmitType)(transfer_dto_1.BankCount, ['BankId']) {
}
exports.BookRequestDto = BookRequestDto;
//# sourceMappingURL=transfer-request.dto.js.map