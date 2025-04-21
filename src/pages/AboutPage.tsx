const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          About the Project
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300">
              The Loan Repayment Factor(R-Factor) project aims to democratize
              access to credit risk assessment tools for Nigerian financial
              institutions. By providing accurate predictions of loan repayment
              probability, we help lenders make informed decisions while
              expanding access to credit for underserved populations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              The Team
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Opeoluwa Mesonrale
                </h3>
                <p className="text-purple-300 text-sm">Lead Data Scientist</p>
                <p className="text-gray-400 mt-2 text-sm">
                  MIT, UniLag. Machine Learning enthusiast with 3 years of
                  fintech experience.
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Deep Seek</h3>
                <p className="text-purple-300 text-sm">Frontend Developer</p>
                <p className="text-gray-400 mt-2 text-sm">
                  React specialist with experience building financial
                  dashboards.
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Claude Anthropic
                </h3>
                <p className="text-purple-300 text-sm">Backend Engineer</p>
                <p className="text-gray-400 mt-2 text-sm">
                  API architect specializing in secure systems.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-300 mb-4">
              We've collected and anonymized loan data from multiple Nigerian
              financial institutions spanning 2021-2023. This data was used to
              train and validate our machine learning models, which predict loan
              repayment probability based on demographic and financial factors.
            </p>
            <p className="text-gray-300">
              Our ethical AI approach ensures that predictions are fair and
              unbiased, while maintaining high accuracy rates that benefit both
              lenders and borrowers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
