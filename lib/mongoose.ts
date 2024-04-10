import mongoose from 'mongoose';
//To check if the mongoose is connectioned
let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL){
        return console.log('Mongo URI not found');
    }
    if (isConnected) {
        return console.log('Already connected to DB');
    }
    try {
       await mongoose.connect(process.env.MONGODB_URL)
       isConnected = true;
       console.log('Connected to DB'); 
    } catch (error) {
        console.log('Error connecting to DB');
    }
}
