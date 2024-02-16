import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Types.ObjectId, ref: "Category" },
  properties: [{ type: Object }],
});

export default mongoose.model("Category", CategorySchema);
