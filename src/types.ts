// types.ts
export type Sex = "Male" | "Female";
export type MaritalStatus = "Single" | "Married" | "Divorced" | "Widowed";
export type ModelType =
  | "random_forest"
  | "linear_regression"
  | "open_ai"
  | "llama"
  | "neural_network";
export type ModelType2 =
  | "RandomForest"
  | "LinearRegression"
  | "OpenAPI"
  | "Llama"
  | "NeuralNetwork";
export type State = "Lagos" | "Abuja" | "Kano" | "Rivers" | "Enugu";

export interface FormData {
  model: ModelType | ModelType2;
  age: number;
  sex: Sex;
  state: State;
  loanAmount: number;
  tenor: number;
  maritalStatus: MaritalStatus;
}

export interface TableData {
  modelType: string;
  hit: string;
  error: string;
  rmse: string;
  category: string;
}

export interface ResponseData {
  userData: FormData;
  prediction: {
    meta: string;
    message: string;
    riskLevel: string;
    recommendation: string;
    repaymentProbabilityScore: number;
  };
}
