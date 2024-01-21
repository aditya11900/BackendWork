import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionRes = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`DB Connected ${connectionRes.connection.host}`);
    } catch (error) {
        console.error("Error", error);
        process.exit(1);
    }
    }
    export default connectDB;