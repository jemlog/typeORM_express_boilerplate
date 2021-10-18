"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./ormconfig/connection"));
const user_1 = __importDefault(require("./router/user"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.set('port', process.env.PORT || 3007);
app.use('/', user_1.default);
// run typeorm 
(0, connection_1.default)();
app.use((req, res, next) => {
    const error = new Error('not valid uri');
    next(error);
});
const errorHandler = (err, req, res, next) => {
    console.log(err);
};
app.use(errorHandler);
app.listen(app.get('port'), () => {
    console.log(`server start at port ${app.get('port')}`);
});
//# sourceMappingURL=app.js.map