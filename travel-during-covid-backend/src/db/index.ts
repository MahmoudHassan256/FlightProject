import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb+srv://Mahmoud256:Mahmoud123@cluster0.16dwaqm.mongodb.net/Covid?retryWrites=true&w=majority");
};

export { connectDb }

