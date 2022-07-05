"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 3000;
const contact_router_1 = require("./src/router/contact.router");
mongoose_1.default.connect('mongodb+srv://root:Password@cluster0.l1wd2.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('DB Connection');
}).catch((err) => {
    console.log('Error connecting');
});
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/contact', contact_router_1.router);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map