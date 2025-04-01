export const SourceCodeSection = () => {
  return (
    <div className="mt-16 bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-white">Source Code & Dataset</h3>
        <p className="text-gray-400 mt-2">
          Access our open-source code and training datasets
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h4 className="text-xl font-semibold text-purple-300 mb-3">
            GitHub Repository
          </h4>
          <p className="text-gray-300 mb-4">
            Our complete source code is available on GitHub, including model
            training scripts, API endpoints, and this frontend application.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Seunope/loan-rCoef"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded-md border border-gray-600 hover:bg-gray-700 transition flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Training
            </a>

            <a
              href="https://github.com/Seunope/loan-rcoef-llm-api"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded-md border border-gray-600 hover:bg-gray-700 transition flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              API
            </a>

            <a
              href="https://github.com/Seunope/loan-rcoef-llm-web"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded-md border border-gray-600 hover:bg-gray-700 transition flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Web App
            </a>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h4 className="text-xl font-semibold text-purple-300 mb-3">
            Hugging Face Dataset
          </h4>
          <p className="text-gray-300 mb-4">
            The Nigerian loan dataset used to train our models is available on
            Hugging Face. It includes anonymized financial data from 2021-2023.
          </p>
          <div className="flex items-center">
            <a
              href="https://huggingface.co/datasets/yourusername/nigeria-loan-data"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-4 rounded-md border border-gray-600 hover:bg-gray-700 transition flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 95 95"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M47.2,0C74.8,0,95,20.2,95,47.7c0,27.5-20.2,47.7-47.8,47.7C20.2,95.4,0,75.2,0,47.7C0,20.2,20.2,0,47.2,0z M30.9,62.7c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3V40.3c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3V62.7z M53.5,62.7c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3V40.3c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3V62.7z" />
              </svg>
              Access Dataset
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
