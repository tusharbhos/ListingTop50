"use client";

import { useState } from "react";
import IntentPopup from "./IntentPopup";

interface Step2IntentProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const intents = [
  { id: "homes", name: "Homes to Live In", icon: "🏠" },
  { id: "investment", name: "Smart Investment Picks", icon: "📊" },
  { id: "luxury", name: "Luxury & Signature Homes", icon: "🏛️" },
  { id: "plots", name: "Plots & Land Opportunity", icon: "📍" },
  { id: "tax", name: "Tax-Smart Property Options", icon: "💰" },
  { id: "commercial", name: "Commercial Spaces & Industrial Assets", icon: "🏢" },
  { id: "special", name: "Special Opportunity Deals", icon: "🎯" },
  { id: "future", name: "Future-Ready & Purpose Homes", icon: "🌿" },
];

export default function Step2Intent({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: Step2IntentProps) {
  const [selectedPopup, setSelectedPopup] = useState<string | null>(null);

  const handleIntentClick = (intentId: string) => {
    setSelectedPopup(intentId);
  };

  const handlePopupClose = (intentId: string, selectedOptions: string[]) => {
    const updatedSubOptions = {
      ...formData.selectedSubOptions,
      [intentId]: selectedOptions,
    };

    const selectedIntents = Object.keys(updatedSubOptions).filter(
      (intent) => updatedSubOptions[intent]?.length > 0,
    );

    updateFormData(2, {
      selectedSubOptions: updatedSubOptions,
      selectedIntents: selectedIntents,
    });

    setSelectedPopup(null);
  };

  const handleContinue = () => {
    if (formData.selectedIntents?.length) {
      nextStep();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* TITLE */}
      <h2 className="text-center text-2xl  font-semibold mb-8" style={{ color: 'var(--text)' }}>
        What best describes what you're looking for
        <span style={{ color: 'var(--primary)' }}>?</span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {intents.map((intent) => {
          const selectedCount = formData.selectedSubOptions?.[intent.id]?.length || 0;

          return (
            <div
              key={intent.id}
              className="cursor-pointer"
              onClick={() => handleIntentClick(intent.id)}
            >
              <div className="flex">
                <div className="text-5xl ml-auto">{intent.icon}</div>
              </div>

              {/* BUTTON */}
              <div
                className="text-white px-4 py-3 rounded-lg font-semibold transition relative"
                style={{
                  backgroundColor: 'var(--primary)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                {intent.name}

                {selectedCount > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--text)' }}
                  >
                    {selectedCount}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-8 gap-2">
        <button
          onClick={prevStep}
          className="border px-6 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          style={{
            color: 'var(--text)',
            borderColor: 'var(--border)',
            backgroundColor: 'var(--bg-white)'
          }}
        >
          Back
        </button>

        <button
          onClick={handleContinue}
          disabled={!formData.selectedIntents?.length}
          className="text-white px-6 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          style={{
            backgroundColor: 'var(--primary)',
          }}
          onMouseEnter={(e) => !formData.selectedIntents?.length && (e.currentTarget.style.backgroundColor = 'var(--primary-dark)')}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
        >
          Continue
        </button>
      </div>

      {/* POPUP */}
      {selectedPopup && (
        <IntentPopup
          intentId={selectedPopup}
          intentName={intents.find((i) => i.id === selectedPopup)?.name || ""}
          intentIcon={intents.find((i) => i.id === selectedPopup)?.icon || ""}
          selectedOptions={formData.selectedSubOptions?.[selectedPopup] || []}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}