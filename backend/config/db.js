import mongoose from "mongoose";
// try{
// const connection = await mongoose.connect('mongodb://127.0.0.1:27017/test');
// console.log("MongoDB connected");
// }catch(error){
// // handleError(error);
// console.log(error);
// }
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
