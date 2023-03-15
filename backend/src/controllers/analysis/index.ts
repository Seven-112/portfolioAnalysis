import { Request, Response } from "express";
import { IAnalysis } from "../../types/analysis";
import Analysis from "../../models/analysis";

const getAnalyses = async (req: Request, res: Response): Promise<void> => {
  try {
    const analyses: IAnalysis[] = await Analysis.find();
    res.status(200).json({ analyses });
  } catch (error) {
    throw error;
  }
};

const addAnalysis = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IAnalysis, "name" | "value" | "desc">;

    const analysis: IAnalysis = new Analysis({
      name: body.name,
      value: body.value,
      desc: body.desc,
    });

    const newAnalysis: IAnalysis = await analysis.save();
    const allAnalyses: IAnalysis[] = await Analysis.find();

    res.status(201).json({
      message: "Analysis added",
      analysis: newAnalysis,
      analyses: allAnalyses,
    });
  } catch (error) {
    throw error;
  }
};

const updateAnalysis = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateAnalysis: IAnalysis | null = await Analysis.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allAnalyses: IAnalysis[] = await Analysis.find();
    res.status(200).json({
      message: "Analysis updated",
      analysis: updateAnalysis,
      analyses: allAnalyses,
    });
  } catch (error) {
    throw error;
  }
};

const deleteAnalysis = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedAnalysis: IAnalysis | null = await Analysis.findByIdAndRemove(
      req.params.id
    );
    const allAnalyses: IAnalysis[] = await Analysis.find();
    res.status(200).json({
      message: "Analysis deleted",
      analysis: deletedAnalysis,
      analyses: allAnalyses,
    });
  } catch (error) {
    throw error;
  }
};

export { getAnalyses, addAnalysis, updateAnalysis, deleteAnalysis };
