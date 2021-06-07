import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState;
    } catch (e) {
        console.log(e);
    }
}

export default dbConnect;