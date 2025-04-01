const DocumentationPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Documentation</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Getting Started
            </h2>
            <p className="text-gray-300 ">
              The Nigeria Loan Prediction tool uses machine learning algorithms
              to predict the likelihood of loan repayment based on demographic
              and financial data. This documentation provides simple information
              on how to use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              API Reference
            </h2>
            <p className="text-gray-300 mb-4">
              Our API allows you to integrate loan prediction capabilities into
              your own applications. The API provides endpoints for prediction,
              model information, and historical data analysis.
            </p>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 font-mono text-sm">
              <p className="text-green-400 mb-2">// Example API request</p>
              <p className="text-gray-300">
                POST https://api.nigerialoanprediction.com/predict
              </p>
              <p className="text-gray-300 mt-2">
                {"{"} <br />
                &nbsp;&nbsp;"age": 35,
                <br />
                &nbsp;&nbsp;"sex": "Male",
                <br />
                &nbsp;&nbsp;"state": "Lagos",
                <br />
                &nbsp;&nbsp;"loanAmount": 500000,
                <br />
                &nbsp;&nbsp;"tenor": 24,
                <br />
                &nbsp;&nbsp;"maritalStatus": "Married"
                <br />
                {"}"}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Input Parameters
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Parameter
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Required
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      age
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Number
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      Age of the applicant (must be ≥ 22)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      sex
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      String
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      Gender of the applicant ("Male" or "Female")
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      state
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      String
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      Nigerian state of residence
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      tenor
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Integer
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      Eg 7, 14,30, 60, 120 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      loanAmount
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Integer
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">200,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
