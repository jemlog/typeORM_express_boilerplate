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
const user_1 = require("./entity/user");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const ormconfig_1 = __importDefault(require("./ormconfig"));
(0, typeorm_1.createConnection)(ormconfig_1.default).then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = new user_1.User();
        user.age = 25;
        user.firstName = 'jemin';
        user.lastName = 'seo';
        const user1 = yield connection.getRepository(user_1.User).save(user);
        res.json(user1);
    }));
    app.listen(8002, () => { console.log('server start!!'); });
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map