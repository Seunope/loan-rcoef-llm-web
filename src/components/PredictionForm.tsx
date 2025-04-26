import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import {
  MaritalStatus,
  ModelType,
  ModelType2,
  ResponseData,
  Sex,
  State,
} from "../types";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

interface PredictionFormProps {
  onSubmit: (data: ResponseData) => void;
}

const tenorOptions = [7, 14, 21, 30, 60, 90, 120, 180, 210, 240];

const modelTypeMapping = {
  OpenAPI: "open_ai",
  Llama: "llama",
  RandomForest: "random_forest",
  LinearRegression: "linear_regression",
  NeuralNetwork: "neural_network",
};
const BASE_URL = import.meta.env.VITE_API_URL; // 'http://localhost:8001'; //

export function PredictionForm({ onSubmit }: PredictionFormProps) {
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
      model: "OpenAPI",
      age: 22,
      sex: "Male" as Sex,
      state: "Lagos" as State,
      loanAmount: 50000,
      tenor: 14,
      maritalStatus: "Single" as MaritalStatus,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Transform form data to match API requirements
        console.log("values", values);
        let payload = {};
        const apiPayload = {
          model_type:
            modelTypeMapping[values.model as keyof typeof modelTypeMapping] ||
            "random_forest",
          features: {
            gender: values.sex.toLowerCase(),
            maritalStatus: values.maritalStatus,
            state: values.state,
            age: values.age,
            loanAmount: values.loanAmount,
            tenorInDays: values.tenor,
          },
        };

        console.log("values.model", values.model);
        let url = BASE_URL + "/ml/predict";
        if (values.model === "OpenAPI") {
          url = BASE_URL + "/open-ai/predict";
          payload = { ...apiPayload.features };
        } else if (values.model === "Llama") {
          url = BASE_URL + "/llama/predict";
          payload = { ...apiPayload.features };
        } else {
          payload = { ...apiPayload };
        }

        const response = await axios
          .post(url, payload)
          .then((data) => {
            console.log("SSSSS", data.data);
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
          userData: {
            ...values,
            model: values.model as ModelType | ModelType2, // Ensure correct type
          },
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
            <option value="OpenAPI">OpenAPI</option>
            <option value="Llama">Meta/Llama</option>
            <option value="RandomForesT">Random Forest</option>
            <option value="LinearRegression">Linear Regression</option>
            <option value="NeuralNetwork">Neural Network</option>
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
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="FCT">Federal Capital Territory (Abuja)</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
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
