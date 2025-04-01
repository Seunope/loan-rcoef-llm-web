import { useState } from "react";
import { Table } from "../components/Table";
import { TableData, ResponseData, FormData } from "../types";
import { HeroSection } from "../components/HeroSection";
import { PredictionForm } from "../components/PredictionForm";
import { SourceCodeSection } from "../components/SourceCode";

const HomePage = () => {
  // Sample data for the table
  const tableData: TableData[] = [
    {
      modelType: "RandomForest",
      hit: "26.9",
      error: "40.9",
      rmse: "2.3",
      category: "ML",
    },
    {
      modelType: "Neural Network",
      hit: "8.5",
      error: "41.9",
      rmse: "2.4",
      category: "ML",
    },
    {
      modelType: "Linear Regression",
      hit: "5.7",
      error: "42.9",
      rmse: "2.4",
      category: "ML",
    },
    {
      modelType: "OpenAI",
      hit: "0.92",
      error: "0.05",
      rmse: "0.10",
      category: "LLM",
    },
    {
      modelType: "OpenAI FineTune",
      hit: "0.92",
      error: "0.05",
      rmse: "0.10",
      category: "LLM",
    },
    {
      modelType: "Meta-Llama-3.1-8B",
      hit: "0.92",
      error: "0.05",
      rmse: "0.10",
      category: "LLM",
    },
    {
      modelType: "Meta-Llama-3.1-8B FineTune",
      hit: "0.92",
      error: "0.05",
      rmse: "0.10",
      category: "LLM",
    },
  ];

  const [predictionResult, setPredictionResult] = useState<string>(
    "Results will display here after submission."
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFormSubmit = (data: ResponseData): void => {
    const dataStr = `
    Model: ${data.userData.model}
    Age: ${data.userData.age}
    Sex: ${data.userData.sex}
    State: ${data.userData.state}
    Loan Amount: ${data.userData.loanAmount}
    Tenor In Days: ${data.userData.tenor}
    Marital Status: ${data.userData.maritalStatus}
    `;

    // Format the output
    const outputText = `${data.prediction.meta}.\n\nInput data:${dataStr}\n\nPrediction Result: ${data.prediction.repaymentCoefficient} \n\n ${data.prediction.message}`;

    setPredictionResult(outputText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                  "This tool can help reduce default rates by 35% in lending
                  portfolio."
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

      {/* Modal for prediction results */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  Prediction Results
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
                  {predictionResult}
                </pre>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
