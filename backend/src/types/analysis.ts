import { Document } from "mongoose";

export interface IAnalysis extends Document {
  name: string;
  value: number;
  desc: string;
}
