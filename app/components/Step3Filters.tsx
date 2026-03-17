"use client";

import { useState } from "react";

interface Step4FiltersProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const budgetRanges = ["1 - 2 Crore", "2 - 3 Crore", "3 - 5 Crore", "Above 5+ Crore"];
const possessionTimelines = ["Ready to Move", "Within 6 Months", "Within 1 Year", "Under Construction"];
const decisionTimelines = ["Immediately", "Within 3 Months", "Within 6+ Months", "Just Exploring"];
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
    }
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
      <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
        What best describes what you're looking for
        <span style={{ color: 'var(--primary)' }}>?</span>
      </h2>

      <div className="space-y-6">
        {/* Budget Range */}
        <div>
          <label className="block text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
            Budget Range :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {budgetRanges.map((range) => (
              <button
                key={range}
                onClick={() => handleChange("budgetRange", range)}
                className={`p-2 text-sm cursor-pointer border rounded-lg transition`}
                style={{
                  color: filters.budgetRange === range ? 'var(--primary-dark)' : 'var(--text)',
                  borderColor: filters.budgetRange === range ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: filters.budgetRange === range ? 'var(--bg-light)' : 'var(--bg-white)',
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Possession Timeline */}
        <div>
          <label className="block text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
            Possession Timeline :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {possessionTimelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => handleChange("possessionTimeline", timeline)}
                className={`p-2 text-sm cursor-pointer border rounded-lg transition`}
                style={{
                  color: filters.possessionTimeline === timeline ? 'var(--primary-dark)' : 'var(--text)',
                  borderColor: filters.possessionTimeline === timeline ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: filters.possessionTimeline === timeline ? 'var(--bg-light)' : 'var(--bg-white)',
                }}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Decision Timeline */}
        <div>
          <label className="block text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
            Decision Timeline :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {decisionTimelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => handleChange("decisionTimeline", timeline)}
                className={`p-2 text-sm cursor-pointer border rounded-lg transition`}
                style={{
                  color: filters.decisionTimeline === timeline ? 'var(--primary-dark)' : 'var(--text)',
                  borderColor: filters.decisionTimeline === timeline ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: filters.decisionTimeline === timeline ? 'var(--bg-light)' : 'var(--bg-white)',
                }}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label className="block text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
            Purpose :-
          </label>
          <div className="flex gap-2">
            {purposes.map((purpose) => (
              <button
                key={purpose}
                onClick={() => handleChange("purpose", purpose)}
                className={`flex-1 p-2 cursor-pointer border rounded-lg transition`}
                style={{
                  color: filters.purpose === purpose ? 'var(--primary-dark)' : 'var(--text)',
                  borderColor: filters.purpose === purpose ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: filters.purpose === purpose ? 'var(--bg-light)' : 'var(--bg-white)',
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
          className="px-6 py-2 border cursor-pointer rounded-lg hover:bg-gray-50 transition"
          style={{
            color: 'var(--text)',
            borderColor: 'var(--border)',
            backgroundColor: 'var(--bg-white)'
          }}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className="px-6 py-2 cursor-pointer text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--primary)',
          }}
          onMouseEnter={(e) => !isComplete && (e.currentTarget.style.backgroundColor = 'var(--primary-dark)')}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
        >
          View Filtered Properties
        </button>
      </div>
    </div>
  );
}