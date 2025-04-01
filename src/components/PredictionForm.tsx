import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { ResponseData } from "../types";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

interface PredictionFormProps {
  onSubmit: (data: ResponseData) => void;
}

const tenorOptions = [7, 14, 21, 30, 60, 90, 120, 180, 210, 240];

const modelTypeMapping = {
  RandomForest: "random_forest",
  LinearRegression: "linear_regression",
  OpenAPI: "open_ai",
  Llama: "llama",
  NeuralNetwork: "neural_network",
};

export function PredictionForm({ onSubmit }: PredictionFormProps): JSX.Element {
  const validationSchema = Yup.object({
    model: Yup.string().required("Model is required"),
    age: Yup.number()
      .min(22, "Age must be at least 22")
      .required("Age is required"),
    sex: Yup.string().required("Sex is required"),
    state: Yup.string().required("State is required"),
    loanAmount: Yup.number()
      .min(1, "Loan amount must be greater than 0")
      .required("Loan amount is required"),
    tenor: Yup.number().required("Tenor is required"),
    maritalStatus: Yup.string().required("Marital status is required"),
  });

  const formik = useFormik({
    initialValues: {
      model: "RandomForest",
      age: 22,
      sex: "Male",
      state: "Lagos",
      loanAmount: 50000,
      tenor: 14,
      maritalStatus: "Single",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Transform form data to match API requirements
        const apiPayload = {
          model_type: modelTypeMapping[values.model] || "random_forest",
          features: {
            gender: values.sex.toLowerCase(),
            maritalStatus: values.maritalStatus,
            state: values.state,
            age: values.age,
            loanAmount: values.loanAmount,
            tenorInDays: values.tenor,
          },
        };

        const response = await axios
          .post("http://127.0.0.1:8001/ml/predict", apiPayload)
          .then((data) => {
            return {
              status: true,
              data: data.data.prediction,
              message: data.data.prediction.message,
            };
          })
          .catch((e) => {
            console.log("EEEEE", e);

            return {
              status: false,
              data: [],
              message: e.message || "An error occurred",
            };
          });

        if (!response.status) {
          toast.error(response.message);
          return;
        }

        console.log("response", response);

        toast.success(response.message);

        const results = {
          userData: values,
          prediction: response.data,
        };

        // Call the parent component's onSubmit handler with form values
        onSubmit(results);
      } catch (error) {
        console.error("Error submitting prediction:", error);
        toast.error("Failed to submit prediction. Please try again.");
      }
    },
  });

  return (
    <>
      <ToastContainer position="top-right" />
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Select Model
          </label>
          <select
            name="model"
            value={formik.values.model}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white ${
              formik.touched.model && formik.errors.model
                ? "border-red-500"
                : "border-gray-600"
            }`}
          >
            <option value="RandomForesT">Random Forest</option>
            <option value="LinearRegression">Linear Regression</option>
            <option value="NeuralNetwork">Neural Network</option>
            <option value="OpenAPI">OpenAPI</option>
            <option value="Meta/Llama">Llama</option>
          </select>
          {formik.touched.model && formik.errors.model ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.model}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="22"
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white ${
              formik.touched.age && formik.errors.age
                ? "border-red-500"
                : "border-gray-600"
            }`}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.age}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Sex
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="sex"
                value="Male"
                checked={formik.values.sex === "Male"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 bg-gray-700 border-gray-600"
              />
              <span className="ml-2 text-gray-300">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sex"
                value="Female"
                checked={formik.values.sex === "Female"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 bg-gray-700 border-gray-600"
              />
              <span className="ml-2 text-gray-300">Female</span>
            </label>
          </div>
          {formik.touched.sex && formik.errors.sex ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.sex}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            State
          </label>
          <select
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white ${
              formik.touched.state && formik.errors.state
                ? "border-red-500"
                : "border-gray-600"
            }`}
          >
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Kano">Kano</option>
            <option value="Rivers">Rivers</option>
            <option value="Enugu">Enugu</option>
          </select>
          {formik.touched.state && formik.errors.state ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.state}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Loan Amount
          </label>
          <input
            type="number"
            name="loanAmount"
            value={formik.values.loanAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="1"
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white ${
              formik.touched.loanAmount && formik.errors.loanAmount
                ? "border-red-500"
                : "border-gray-600"
            }`}
          />
          {formik.touched.loanAmount && formik.errors.loanAmount ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.loanAmount}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Tenor (days)
          </label>
          <select
            name="tenor"
            value={formik.values.tenor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white ${
              formik.touched.tenor && formik.errors.tenor
                ? "border-red-500"
                : "border-gray-600"
            }`}
          >
            {tenorOptions.map((days) => (
              <option key={days} value={days}>
                {days} days
              </option>
            ))}
          </select>
          {formik.touched.tenor && formik.errors.tenor ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.tenor}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Marital Status
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["Single", "Married", "Divorced", "Widowed"].map((status) => (
              <label key={status} className="flex items-center">
                <input
                  type="radio"
                  name="maritalStatus"
                  value={status}
                  checked={formik.values.maritalStatus === status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 bg-gray-700 border-gray-600"
                />
                <span className="ml-2 text-gray-300">{status}</span>
              </label>
            ))}
          </div>
          {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.maritalStatus}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 disabled:opacity-70"
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
