"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    code: Number,
    email: String,
    phoneNumber: Number
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
//# sourceMappingURL=customer.model.js.map