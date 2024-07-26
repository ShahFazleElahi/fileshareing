import mongoose from "mongoose";


const DbConnection = async () => { 
    const DB_URL = 'mongodb+srv://shahfazleelahi:RZUflXWXKvPcigrG@cluster0.ngy6ox2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try {
        mongoose.connect(DB_URL,( useNewUrlParser: true));
        console.log('Detabase connected successfully')
    } catch(error){
        console.error('Error while Connection with the database', error message);
    }
}

export default DbConnection;