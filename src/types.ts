// types.ts
export type Sex = "Male" | "Female";
export type MaritalStatus = "Single" | "Married" | "Divorced" | "Widowed";
export type ModelType = "OpenAPI" | "ML";
export type State = "Lagos" | "Abuja" | "Kano" | "Rivers" | "Enugu";

export interface FormData {
  model: ModelType;
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
    repaymentCoefficient: string;
    meta: string;
    message: string;
  };
}
