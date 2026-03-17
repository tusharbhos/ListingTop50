"use client";

import { useState } from "react";
import { Theme } from "../config/theme";

interface Step4FiltersProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  theme: Theme;
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
  theme,
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

  const buttonBaseStyle = {
    padding: "0.5rem",
    fontSize: "0.875rem",
    cursor: "pointer",
    border: "1px solid",
    borderRadius: "0.5rem",
    transition: "all 0.2s",
  };

  return (
    <div>
      <h2
        className="text-2xl font-semibold mb-6"
        style={{ color: theme.heading }}
      >
        What best describes what you're looking for
        <span style={{ color: theme.primary }}>?</span>
      </h2>

      <div className="space-y-6">
        {/* Budget Range */}
        <div>
          <label
            className="block text-lg font-bold mb-2"
            style={{ color: theme.text }}
          >
            Budget Range :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {budgetRanges.map((range) => (
              <button
                key={range}
                onClick={() => handleChange("budgetRange", range)}
                style={{
                  ...buttonBaseStyle,
                  borderColor:
                    filters.budgetRange === range
                      ? theme.primary
                      : theme.border,
                  color:
                    filters.budgetRange === range ? theme.primary : theme.text,
                  backgroundColor:
                    filters.budgetRange === range ? theme.bg : "#f9fafb",
                  borderWidth: filters.budgetRange === range ? "2px" : "1px",
                }}
                onMouseEnter={(e) => {
                  if (filters.budgetRange !== range) {
                    e.currentTarget.style.borderColor = theme.hover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (filters.budgetRange !== range) {
                    e.currentTarget.style.borderColor = theme.border;
                  }
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Possession Timeline */}
        <div>
          <label
            className="block text-lg font-bold mb-2"
            style={{ color: theme.text }}
          >
            Possession Timeline :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {possessionTimelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => handleChange("possessionTimeline", timeline)}
                style={{
                  ...buttonBaseStyle,
                  borderColor:
                    filters.possessionTimeline === timeline
                      ? theme.primary
                      : theme.border,
                  color:
                    filters.possessionTimeline === timeline
                      ? theme.primary
                      : theme.text,
                  backgroundColor:
                    filters.possessionTimeline === timeline
                      ? theme.bg
                      : "#f9fafb",
                  borderWidth:
                    filters.possessionTimeline === timeline ? "2px" : "1px",
                }}
                onMouseEnter={(e) => {
                  if (filters.possessionTimeline !== timeline) {
                    e.currentTarget.style.borderColor = theme.hover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (filters.possessionTimeline !== timeline) {
                    e.currentTarget.style.borderColor = theme.border;
                  }
                }}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Decision Timeline */}
        <div>
          <label
            className="block text-lg font-bold mb-2"
            style={{ color: theme.text }}
          >
            Decision Timeline :-
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {decisionTimelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => handleChange("decisionTimeline", timeline)}
                style={{
                  ...buttonBaseStyle,
                  borderColor:
                    filters.decisionTimeline === timeline
                      ? theme.primary
                      : theme.border,
                  color:
                    filters.decisionTimeline === timeline
                      ? theme.primary
                      : theme.text,
                  backgroundColor:
                    filters.decisionTimeline === timeline
                      ? theme.bg
                      : "#f9fafb",
                  borderWidth:
                    filters.decisionTimeline === timeline ? "2px" : "1px",
                }}
                onMouseEnter={(e) => {
                  if (filters.decisionTimeline !== timeline) {
                    e.currentTarget.style.borderColor = theme.hover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (filters.decisionTimeline !== timeline) {
                    e.currentTarget.style.borderColor = theme.border;
                  }
                }}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label
            className="block text-lg font-bold mb-2"
            style={{ color: theme.text }}
          >
            Purpose :-
          </label>
          <div className="flex gap-2">
            {purposes.map((purpose) => (
              <button
                key={purpose}
                onClick={() => handleChange("purpose", purpose)}
                style={{
                  ...buttonBaseStyle,
                  flex: 1,
                  borderColor:
                    filters.purpose === purpose ? theme.primary : theme.border,
                  color:
                    filters.purpose === purpose ? theme.primary : theme.text,
                  backgroundColor:
                    filters.purpose === purpose ? theme.bg : "#f9fafb",
                  borderWidth: filters.purpose === purpose ? "2px" : "1px",
                }}
                onMouseEnter={(e) => {
                  if (filters.purpose !== purpose) {
                    e.currentTarget.style.borderColor = theme.hover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (filters.purpose !== purpose) {
                    e.currentTarget.style.borderColor = theme.border;
                  }
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
          style={{
            padding: "0.5rem 1.5rem",
            border: `1px solid ${theme.border}`,
            borderRadius: "0.5rem",
            cursor: "pointer",
            color: theme.text,
            backgroundColor: "transparent",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f3f4f6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          style={{
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            cursor: isComplete ? "pointer" : "not-allowed",
            color: "white",
            backgroundColor: theme.primary,
            opacity: !isComplete ? 0.5 : 1,
            border: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (isComplete) {
              e.currentTarget.style.backgroundColor = theme.hover;
            }
          }}
          onMouseLeave={(e) => {
            if (isComplete) {
              e.currentTarget.style.backgroundColor = theme.primary;
            }
          }}
        >
          View Filtered Properties
        </button>
      </div>
    </div>
  );
}
