"use client";

import { useState } from "react";

interface Step4FiltersProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const budgetRanges = [
  "1 - 2 Crore",
  "2 - 3 Crore",
  "3 - 5 Crore",
  "Above 5+ Crore",
];

const possessionTimelines = [
  "Ready to Move",
  "Within 6 Months",
  "Within 1 Year",
  "Under Construction",
];

const decisionTimelines = [
  "Immediately",
  "Within 3 Months",
  "Within 6+ Months",
  "Just Exploring",
];

const purposes = ["Live", "Invest", "Mixed"];

export default function Step4Filters({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: Step4FiltersProps) {
  const [filters, setFilters] = useState(
    formData.filters || {
      budgetRange: "",
      possessionTimeline: "",
      decisionTimeline: "",
      purpose: "",
    },
  );

  const handleChange = (field: string, value: string) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    updateFormData(4, { filters });
    nextStep();
  };

  const isComplete = Object.values(filters).every((value) => value !== "");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--heading)" }}>
        What best describes what you're looking for
        <span style={{ color: "var(--primary)" }}>?</span>
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-bold text-black mb-2">
            Budget Range :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {budgetRanges.map((range) => (
              <button
                key={range}
                onClick={() => handleChange("budgetRange", range)}
                className={`p-2 text-sm cursor-pointer border text-black rounded-lg transition ${
                  filters.budgetRange === range
                    ? "bg-orange-50"
                    : "bg-gray-50 hover:border-orange-300"
                }`}
                style={{
                  borderColor: filters.budgetRange === range ? "var(--primary)" : "",
                  color: filters.budgetRange === range ? "var(--primary)" : "",
                  backgroundColor: filters.budgetRange === range ? "var(--bg)" : ""
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold text-black mb-2">
            Possession Timeline :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {possessionTimelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => handleChange("possessionTimeline", timeline)}
                className={`p-2 text-sm cursor-pointer border text-black rounded-lg transition ${
                  filters.possessionTimeline === timeline
                    ? "bg-orange-50"
                    : "bg-gray-50 hover:border-orange-300"
                }`}
                style={{
                  borderColor: filters.possessionTimeline === timeline ? "var(--primary)" : "",
                  color: filters.possessionTimeline === timeline ? "var(--primary)" : "",
                  backgroundColor: filters.possessionTimeline === timeline ? "var(--bg)" : ""
                }}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold text-black mb-2">
            Decision Timeline :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {decisionTimelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => handleChange("decisionTimeline", timeline)}
                className={`p-2 text-sm cursor-pointer border text-black rounded-lg transition ${
                  filters.decisionTimeline === timeline
                    ? "bg-orange-50"
                    : "bg-gray-50 hover:border-orange-300"
                }`}
                style={{
                  borderColor: filters.decisionTimeline === timeline ? "var(--primary)" : "",
                  color: filters.decisionTimeline === timeline ? "var(--primary)" : "",
                  backgroundColor: filters.decisionTimeline === timeline ? "var(--bg)" : ""
                }}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold text-black mb-2">
            Purpose :-
          </label>
          <div className="flex gap-2">
            {purposes.map((purpose) => (
              <button
                key={purpose}
                onClick={() => handleChange("purpose", purpose)}
                className={`flex-1 p-2 cursor-pointer border text-black rounded-lg transition ${
                  filters.purpose === purpose
                    ? "bg-orange-50"
                    : "bg-gray-50 hover:border-orange-300"
                }`}
                style={{
                  borderColor: filters.purpose === purpose ? "var(--primary)" : "",
                  color: filters.purpose === purpose ? "var(--primary)" : "",
                  backgroundColor: filters.purpose === purpose ? "var(--bg)" : ""
                }}
              >
                {purpose}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex space-x-3 justify-between mt-8">
        <button
          onClick={prevStep}
          className="px-6 py-2 border cursor-pointer text-black border-black rounded-lg hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="px-6 py-2 cursor-pointer text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
          style={{ backgroundColor: "var(--primary)" }}
        >
          View Filtered Properties
        </button>
      </div>
    </div>
  );
}