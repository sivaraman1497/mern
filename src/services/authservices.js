import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.model.js";

export const createUser = async({name, email, password}) => {
    const userExists = await User.findOne({email})

    if(userExists)
    {
        throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name, email, password: hashedPassword
    })

    return user._id;
}

export const checkUser = async(email) => {
    const userExists = await User.findOne({email})
    return userExists._id;
}