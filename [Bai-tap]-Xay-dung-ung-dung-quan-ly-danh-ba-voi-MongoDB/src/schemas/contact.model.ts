import {Schema, model} from 'mongoose';

interface IContact {
    name: string;
    phoneNumber: number;
}

const contactSchema = new Schema<IContact>({
        name: String,
        phoneNumber: Number
    }
);

const contact = model('contact', contactSchema);

export {contact};