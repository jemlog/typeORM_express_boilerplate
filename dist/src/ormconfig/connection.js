"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const process_1 = __importDefault(require("process"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const initConn = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionOptions = yield (0, typeorm_1.getConnectionOptions)(process_1.default.env.NODE_ENV);
    (0, typeorm_1.createConnection)(Object.assign(Object.assign({}, connectionOptions), { name: "default" }));
});
exports.default = initConn;
//# sourceMappingURL=connection.js.map