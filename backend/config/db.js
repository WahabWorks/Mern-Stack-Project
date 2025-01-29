import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const con =await mongoose.connect('mongodb://localhost:27017/shopwaver');
        console.log(`Connected to MongoDB ${con.connection.host}`.bgGreen );
    
    } catch (error) {
        console.log(`MongoDB Connection Error ${error}`);
                
    }
}

export default connectDB ;