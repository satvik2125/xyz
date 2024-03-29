import news from "./modal/news.js";
import { data } from "./constants/data.js";

const DefaultData = async () => {
  try {
    await news.deleteMany({});
    await news.insertMany(data);

    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error ", error.message);
  }
};

export default DefaultData;
