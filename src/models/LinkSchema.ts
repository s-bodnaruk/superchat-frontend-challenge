import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  link: {
    type: String,
  },
});

LinkSchema.set("timestamps", true);

export default mongoose?.models?.Link || mongoose.model("Link", LinkSchema);
