const ModelsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          Our Prediction Models
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              Random Forest
            </h2>
            <p className="text-gray-300 mb-4">
              Our Random Forest model is trained on Nigerian loan data from
              2021. It excels at handling categorical variables and is resistant
              to overfitting.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-white mb-2">
                Performance Metrics
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>Accuracy: 85%</li>
                <li>Error Rate: 8%</li>
                <li>RMSE: 0.15</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              XGBoost
            </h2>
            <p className="text-gray-300 mb-4">
              Our XGBoost model is our highest performing algorithm, trained on
              2022 Nigerian loan data with enhanced feature engineering.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-white mb-2">
                Performance Metrics
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>Accuracy: 92%</li>
                <li>Error Rate: 5%</li>
                <li>RMSE: 0.10</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              Neural Network
            </h2>
            <p className="text-gray-300 mb-4">
              Our Neural Network model uses a deep learning approach to capture
              complex patterns in 2023 Nigerian loan data.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-white mb-2">
                Performance Metrics
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>Accuracy: 78%</li>
                <li>Error Rate: 15%</li>
                <li>RMSE: 0.25</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              Logistic Regression
            </h2>
            <p className="text-gray-300 mb-4">
              Our Logistic Regression model serves as a reliable baseline
              trained on combined Nigerian loan data from multiple years.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-white mb-2">
                Performance Metrics
              </h3>
              <ul className="space-y-1 text-gray-300">
                <li>Accuracy: 82%</li>
                <li>Error Rate: 12%</li>
                <li>RMSE: 0.20</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
