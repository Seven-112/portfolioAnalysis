import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

// Get data from DB using Axios
export const getAnalyses = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const analyses: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/analyses"
    );
    return analyses;
  } catch (error) {
    throw error;
  }
};

// Add data
export const addAnalysis = async (
  formData: IAnalysis
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const analysis: Omit<IAnalysis, "_id"> = {
      name: formData.name,
      desc: formData.desc,
      value: formData.value,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-analysis",
      analysis
    );
    return saveTodo;
  } catch (error) {
    throw error;
  }
};

// Update data
export const updateAnalysis = async (
  analysis: IAnalysis
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    // const analysisUpdate: Pick<IAnalysis, "status"> = {
    //   status: true,
    // };
    const updatedAnalysis: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-analysis/${analysis._id}`
    );
    return updatedAnalysis;
  } catch (error) {
    throw error;
  }
};

// Delete data
export const deleteAnalysis = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedAnalysis: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-analyis/${_id}`
    );
    return deletedAnalysis;
  } catch (error) {
    throw error;
  }
};
