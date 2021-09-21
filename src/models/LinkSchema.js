import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  shortLinkId: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
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
  metricBackground: {
    type: String,
  },
  metricBorderRadius: {
    type: String,
  },
  metricFontSize: {
    type: String,
  },
  metricFontColor: {
    type: String,
  },
});

LinkSchema.set("timestamps", true);

export default mongoose?.models?.Link || mongoose.model("Link", LinkSchema);
