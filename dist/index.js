"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
exports.app = app;
app.use(body_parser_1.default.json());
app.use(helmet_1.default());
app.get('/', (req, res) => res.send('Hello World!'));
app.use(routes_1.default);
const port = 8080;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map