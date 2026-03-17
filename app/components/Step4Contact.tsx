"use client";

import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useThemeStyles } from "../hooks/useThemeStyles";

interface Step5ContactProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  prevStep: () => void;
}

export default function Step5Contact({
  formData,
  updateFormData,
  prevStep,
}: Step5ContactProps) {
  const { getHeadingClass, getButtonClass, getTextClass, getFocusClass } = useThemeStyles();

  const [contact, setContact] = useState(
    formData.contact || {
      name: "",
      whatsapp: "",
      email: "",
    }
  );
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const validateWhatsApp = (number: string) => {
    return /^[0-9]{10}$/.test(number);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateWhatsApp(contact.whatsapp)) {
      setError("Please enter a valid 10-digit WhatsApp number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const submissionData = {
        ...formData,
        contact,
      };

      console.log("Submitting data:", JSON.stringify(submissionData, null, 2));

      const response = await axios.post("/api/submit-property-search", submissionData);

      if (response.data.success) {
        updateFormData(5, { contact });
        setSubmitted(true);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setError(error.response?.data?.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <LoadingSpinner />
        <div className="mt-6 space-y-2">
          <p className="text-xl font-semibold text-gray-800">We are finding the best match for you</p>
          <p className={`text-lg ${getTextClass("primary")} animate-pulse`}>
            Our team will connect on WhatsApp within 1 hour
          </p>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-medium">✓ Submission Successful!</p>
            <p className="text-sm text-green-600 mt-1">We've received your requirements</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">Thank you for choosing Top50 Properties</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className={`${getHeadingClass("h2")} text-gray-800 mb-6`}>
        Where to contact you<span className={getTextClass("primary")}>?</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
            minLength={2}
            className={`w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none ${getFocusClass()}`}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={contact.whatsapp}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className={`w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none ${getFocusClass()}`}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none ${getFocusClass()}`}
            placeholder="Enter your email"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            className={`px-6 py-2 border border-black text-black rounded-lg hover:bg-gray-50 transition`}
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 ${getButtonClass(
              "primary"
            )} rounded-lg transition disabled:opacity-50 flex items-center gap-2`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}