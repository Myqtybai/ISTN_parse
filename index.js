import cheerio from "cheerio";
import mongoose from "mongoose";
import { windService } from "./whiteWind/service.js";
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/istn");
    console.log("connect");
    //windService();
  } catch (e) {
    console.log(e);
  }
})();
