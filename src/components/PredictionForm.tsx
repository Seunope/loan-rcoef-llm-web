import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../types";

interface PredictionFormProps {
  onSubmit: (formData: FormData) => void;
}

export function PredictionForm({ onSubmit }: PredictionFormProps): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    model: "ML",
    age: 22,
    sex: "Male",
    state: "Lagos",
    loanAmount: 50000,
    tenor: 12,
    maritalStatus: "Single",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "age" || name === "loanAmount" || name === "tenor"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Model
        </label>
        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="OpenAPI">OpenAPI</option>
          <option value="ML">ML</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="22"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sex
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="sex"
              value="Male"
              checked={formData.sex === "Male"}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="sex"
              value="Female"
              checked={formData.sex === "Female"}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          State
        </label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Kano">Kano</option>
          <option value="Rivers">Rivers</option>
          <option value="Enugu">Enugu</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loan Amount
        </label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          min="1"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tenor (months): {formData.tenor}
        </label>
        <input
          type="range"
          name="tenor"
          value={formData.tenor}
          onChange={handleChange}
          min="1"
          max="60"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>1</span>
          <span>60</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Marital Status
        </label>
        <div className="grid grid-cols-2 gap-2">
          {["Single", "Married", "Divorced", "Widowed"].map((status) => (
            <label key={status} className="flex items-center">
              <input
                type="radio"
                name="maritalStatus"
                value={status}
                checked={formData.maritalStatus === status}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium rounded-md hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
