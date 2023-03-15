interface IAnalysis {
  _id: string;
  name: string;
  value: number;
  desc: string;
}

type ApiDataType = {
  message: string;
  analyses: IAnalysis[];
  analysis?: IAnalysis;
};
