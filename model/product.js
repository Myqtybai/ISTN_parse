import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: String,
  prise: Number,
  image: String,
  description: Array,
  type: String,
  shop: String,
});
export default mongoose.model("product", schema);
