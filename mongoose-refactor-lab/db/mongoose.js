import mongoose from "mongoose";

// dont need to make variables because mongoose internally stores the connection. Eliminates xtra steps

try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB via Mongoose");

} catch (err) {
    console.error("Mongoose connection error:", err);
}

export default mongoose.connection;