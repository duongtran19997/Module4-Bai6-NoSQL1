"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const customer_router_1 = __importDefault(require("./src/router/customer.router"));
const app = (0, express_1.default)();
const PORT = 3000;
mongoose_1.default.connect('mongodb+srv://root:Password@cluster0.l1wd2.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('DB connected');
}).catch(err => {
    console.log('Error connecting to Mongo');
});
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/customers', customer_router_1.default);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map