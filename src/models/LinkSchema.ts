import mongoose from "mongoose";

interface ILinkSchema {
  shortLinkId: string;
  link: string;
  wrapperBackground?: string;
  cardBackground?: string;
  metricBackground?: string;
  metricBorderRadius?: string;
  metricFontSize?: string;
  metricFontColor?: string;
  avatarStyle?: string;
}

const LinkSchema = new mongoose.Schema<ILinkSchema>({
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

export default mongoose?.models?.Link ||
  mongoose.model<ILinkSchema>("Link", LinkSchema);
