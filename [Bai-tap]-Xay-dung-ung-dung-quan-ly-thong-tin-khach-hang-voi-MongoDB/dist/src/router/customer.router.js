"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const customer_model_1 = require("../schema/customer.model");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
router.get('/create', upload.none(), (req, res) => {
    res.render('create');
});
router.post('/create', upload.none(), (req, res) => {
    const { name, code, email, phoneNumber } = req.body;
    const user = new customer_model_1.User({ name, code, email, phoneNumber });
    user.save().then(() => {
        res.redirect('/customers/list');
    }).catch(err => {
        res.render('error');
    });
});
router.get('/list', (req, res) => {
    let customers = customer_model_1.User.find().then((user) => {
        console.log(user);
        res.render('listCustomer', { users: user });
    }).catch((err) => {
        res.render('error');
    });
});
router.get('/delete', (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    customer_model_1.User.findOneAndRemove({ _id: req.query.id }).then(() => {
        res.redirect('/customers/list');
    }).catch(err => {
        res.render('error');
    });
});
router.get('/update', (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    customer_model_1.User.findOne({ _id: userId }).then((user) => {
        console.log(user);
        res.render('update', { user: user });
    }).catch((err) => {
        res.render('error');
    });
});
router.post('/update', upload.none(), (req, res) => {
    let { _id, name, code, email, phoneNumber } = req.body;
    customer_model_1.User.findOneAndUpdate({ _id: _id }, { name, code, email, phoneNumber }).then(() => {
        res.redirect('/customers/list');
    }).catch(() => {
        res.render('error');
    });
});
exports.default = router;
//# sourceMappingURL=customer.router.js.map