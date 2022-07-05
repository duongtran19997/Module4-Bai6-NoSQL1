"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contact = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    name: String,
    phoneNumber: Number
});
const contact = (0, mongoose_1.model)('contact', contactSchema);
exports.contact = contact;
//# sourceMappingURL=contact.model.js.map