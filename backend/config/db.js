import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://task-project:asdasd1234@cluster0.jistuou.mongodb.net/taskProject?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
            );
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB Conectado en: ${url}`);
    }catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;