import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb://user:Firstproject@newsapp-shard-00-00.uolzn.mongodb.net:27017,newsapp-shard-00-01.uolzn.mongodb.net:27017,newsapp-shard-00-02.uolzn.mongodb.net:27017/Newsapp?ssl=true&replicaSet=atlas-ci4avb-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};
export default Connection;
