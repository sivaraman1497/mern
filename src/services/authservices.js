import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.model.js";
import {generateToken} from '../utils/jwtutils.js'

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

export const loginUser = async({email, password}) => {
    const user = await User.findOne({email}).select('+password')

    if(!user) throw new Error('User does not exist');

    const userMatch = await bcrypt.compare(password, user.password);

    if(!userMatch) throw new Error('Email or password does not match')

    const token = generateToken({userid: user.id, email: user.email});

    return {
        token, 
        user: 
        {
            id: user.id, name: user.name, email: user.email
        }
    };
}