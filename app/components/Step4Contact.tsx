"use client";

import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

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
          <p className="text-xl font-semibold" style={{ color: 'var(--text)' }}>
            We are finding the best match for you
          </p>
          <p className="text-lg animate-pulse" style={{ color: 'var(--primary)' }}>
            Our team will connect on WhatsApp within 1 hour
          </p>

          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-light)' }}>
            <p className="font-medium" style={{ color: 'var(--success)' }}>
              ✓ Submission Successful!
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
              We've received your requirements
            </p>
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
            Thank you for choosing Top50 Properties
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
        Where to contact you<span style={{ color: 'var(--primary)' }}>?</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            Full Name <span style={{ color: 'var(--error)' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
            minLength={2}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            style={{
              color: 'var(--text)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-white)'
            }}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            WhatsApp Number <span style={{ color: 'var(--error)' }}>*</span>
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={contact.whatsapp}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            style={{
              color: 'var(--text)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-white)'
            }}
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            Email Address <span style={{ color: 'var(--error)' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            style={{
              color: 'var(--text)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-white)'
            }}
            placeholder="Enter your email"
          />
        </div>

        {error && (
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-light)', borderColor: 'var(--error)' }}>
            <p className="text-sm" style={{ color: 'var(--error)' }}>{error}</p>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition"
            style={{
              color: 'var(--text)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-white)'
            }}
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-white rounded-lg transition disabled:opacity-50 flex items-center gap-2"
            style={{
              backgroundColor: 'var(--primary)',
            }}
            onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = 'var(--primary-dark)')}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
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