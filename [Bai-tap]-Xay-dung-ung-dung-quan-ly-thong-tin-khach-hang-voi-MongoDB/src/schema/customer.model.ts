import {Schema, model}from "mongoose";

interface ICustomer {
    name: string;
    code: number;
    email: string;
    phoneNumber: number;
}

const userSchema = new Schema<ICustomer>({
    name:String,
    code:Number,
    email:String,
    phoneNumber:Number
});

const User = model('User',userSchema)

export {User}