import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  link: {
    type: String,
  },
  wrapperBackground: {
    type: String,
  },
  cardBackground: {
    type: String,
  },
  avatarStyle: {
    type: String,
  },
  buttonBackground1: {
    type: String,
  },
  buttonBackground2: {
    type: String,
  },
  buttonBorderRadius: {
    type: String,
  },
  id: {
    type: Number,
  },
});

LinkSchema.set("timestamps", true);

export default mongoose?.models?.Link || mongoose.model("Link", LinkSchema);
