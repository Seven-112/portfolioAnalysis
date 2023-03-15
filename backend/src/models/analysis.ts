import { IAnalysis } from "../types/analysis";
import { model, Schema } from "mongoose";

const analysisSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IAnalysis>("Analysis", analysisSchema);
