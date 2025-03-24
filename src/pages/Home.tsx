import { useState } from "react";
import { Table } from "../components/Table";
import { TableData, FormData } from "../types";
import { HeroSection } from "../components/HeroSection";
import { PredictionForm } from "../components/PredictionForm";
import { SourceCodeSection } from "../components/SourceCode";

const HomePage = () => {
  // Sample data for the table
  const tableData: TableData[] = [
    {
      modelType: "RandomForest",
      hit: "0.85",
      error: "0.08",
      rmse: "0.15",
      dataset: "Nigeria-2021",
    },
    {
      modelType: "XGBoost",
      hit: "0.92",
      error: "0.05",
      rmse: "0.10",
      dataset: "Nigeria-2022",
    },
    {
      modelType: "Neural Network",
      hit: "0.78",
      error: "0.15",
      rmse: "0.25",
      dataset: "Nigeria-2023",
    },
    {
      modelType: "Logistic Regression",
      hit: "0.82",
      error: "0.12",
      rmse: "0.20",
      dataset: "Nigeria-Combined",
    },
  ];

  const [predictionResult, setPredictionResult] = useState<string>(
    "Results will display here after submission."
  );

  const handleFormSubmit = (formData: FormData): void => {
    // Validate inputs
    if (
      !formData.model ||
      !formData.sex ||
      !formData.state ||
      !formData.maritalStatus
    ) {
      setPredictionResult("Error: Please fill out all fields.");
      return;
    }

    if (formData.age < 22) {
      setPredictionResult(
        "Error: Age must be at least 22 years old for loan eligibility."
      );
      return;
    }

    if (formData.loanAmount <= 0) {
      setPredictionResult("Error: Loan amount must be greater than 0.");
      return;
    }

    if (formData.tenor < 1 || formData.tenor > 60) {
      setPredictionResult("Error: Tenor must be between 1 and 60 months.");
      return;
    }

    // Format the input data as a string
    const dataStr = `
    Model: ${formData.model}
    Age: ${formData.age}
    Sex: ${formData.sex}
    State: ${formData.state}
    Loan Amount: ${formData.loanAmount}
    Tenor (months): ${formData.tenor}
    Marital Status: ${formData.maritalStatus}
    `;

    // For demonstration, calculate a simple prediction
    const sexValue = formData.sex === "Male" ? 1 : 0;
    const result = parseInt(formData.age.toString()) + sexValue;

    // Format the output
    const outputText = `Input validated. Age requirement met.\n\nInput data:${dataStr}\n\nPrediction Result: ${result}`;

    setPredictionResult(outputText);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <HeroSection />

      <div className="mt-16 bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
            <h3 className="text-2xl font-bold mb-4">Predict Loan Repayment</h3>
            <p className="text-purple-200 mb-6">
              Our AI model analyzes Nigerian loan data to predict repayment
              probability. Enter your details to get started.
            </p>
            <div className="hidden md:block">
              <div className="mt-8 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm border border-purple-800/50">
                <p className="font-medium text-white">
                  "This tool helped us reduce default rates by 35% in our
                  lending portfolio."
                </p>
                <p className="mt-2 text-purple-300">
                  — Adebayo J., Microfinance Manager
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-800">
            <PredictionForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white">Prediction Results</h3>
          <p className="text-gray-400 mt-2">
            See the output of your prediction request
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
            {predictionResult}
          </pre>
        </div>
      </div>

      <div className="mt-16 bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Model Performance Metrics
          </h3>
          <p className="text-gray-400 mt-2">
            Comparative analysis of prediction models
          </p>
        </div>

        <Table data={tableData} />
      </div>

      {/* Source Code Section */}
      <SourceCodeSection />
    </div>
  );
};
export default HomePage;
