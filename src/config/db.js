import mongoose from "mongoose";

import { getEnvFile, stop } from '../utils/customutils.js';

getEnvFile(2);  // traverse 2 folders

const connectDb = async () => {
    try
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected')
    }
    catch(err)
    {
        console.log('Mongodb connection failed: ', err.message)
        process.exit(1);
    }
}

export default connectDb;