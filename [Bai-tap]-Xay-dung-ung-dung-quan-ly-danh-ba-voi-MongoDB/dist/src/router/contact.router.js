"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const contact_model_1 = require("../schemas/contact.model");
router.get('/create', upload.none(), (req, res) => {
    res.render('create');
});
router.post('/create', upload.none(), (req, res) => {
    const { name, phoneNumber } = req.body;
    const Contact = new contact_model_1.contact({ name, phoneNumber });
    Contact.save().then(() => {
        res.redirect('/contact/list');
    }).catch(err => {
        res.render('error');
    });
});
router.get('/list', (req, res) => {
    let customers = contact_model_1.contact.find().then((user) => {
        console.log(user);
        res.render('contactList', { users: user });
    }).catch((err) => {
        res.render('error');
    });
});
//# sourceMappingURL=contact.router.js.map