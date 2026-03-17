"use client";

import { useState, useEffect } from "react";

interface IntentPopupProps {
  intentId: string;
  intentName: string;
  intentIcon: string;
  selectedOptions: string[];
  onClose: (intentId: string, selectedOptions: string[]) => void;
}

const subOptions = {
  homes: [
    "Ready-to-Move Homes",
    "Under-Construction Homes",
    "Spacious Family Homes",
    "Compact Starter Homes",
    "Senior-Friendly Homes",
    "Pet-Friendly Homes",
    "Gated Community Living",
    "Redevelopment Projects (old → new)",
  ],
  investment: [
    "Rental Yield Properties",
    "Appreciation-Focused Properties",
    "Early-Stage Entry Projects",
    "Pre-Launch Opportunities",
    "Investor-Heavy Projects",
    "Exit-Ready Inventory",
  ],
  luxury: [
    "Luxury Homes (3Cr+)",
    "Ultra-Luxury (10Cr+)",
    "Branded Residences",
    "Golf / Sea / River View Homes",
    "Landmark Addresses",
    "Limited Inventory Projects",
  ],
  plots: [
    "Plotted Developments",
    "NA Plots",
    "Township Plots",
    "Second-Home Land",
    "Peripheral Growth Corridors",
  ],
  tax: [
    "Tax-Saving Residential (80C / 24B)",
    "Long-Term Capital Gain Planning",
    "Reinvestment Properties (54 / 54F use cases)",
    "Lease-Structured Commercial",
    "Trust / HUF Friendly Assets",
  ],
  commercial: [
    "Office Spaces",
    "Retail High-Street",
    "Warehousing / Logistics",
    "Co-working Assets",
    "Industrial Units - Ownership",
    "Industrial Units - Preleased",
  ],
  special: [
    "Distress Sale Properties",
    "Bulk Inventory Deals",
    "NRI Exit Units",
    "Last Few Units Projects",
    "Developer-Owned Inventory",
  ],
  future: [
    "Green / Sustainable Homes",
    "Vaastu-Compliant Homes",
    "Smart Homes",
    "Wellness-Centric Projects",
  ],
};

export default function IntentPopup({
  intentId,
  intentName,
  intentIcon,
  selectedOptions,
  onClose,
}: IntentPopupProps) {
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    const initialSelected: Record<string, boolean> = {};
    selectedOptions.forEach((option) => {
      initialSelected[option] = true;
    });
    setSelected(initialSelected);
  }, [selectedOptions]);

  const options = subOptions[intentId as keyof typeof subOptions] || [];

  const handleCheckboxChange = (option: string) => {
    setSelected((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const handleSave = () => {
    const selectedList = Object.entries(selected)
      .filter(([_, isSelected]) => isSelected)
      .map(([option]) => option);
    onClose(intentId, selectedList);
  };

  const handleClose = () => {
    onClose(intentId, selectedOptions);
  };

  return (
    <div
      className="fixed inset-0 bg-opacity-50 z-50 flex flex-col"
      style={{ height: "80dvh" }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto flex flex-col overflow-hidden"
        style={{ maxHeight: "95%" }}
      >
        <div className="p-5 border-b border-gray-200">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h2 className="text-md font-semibold text-gray-800 flex items-center gap-2 flex-wrap">
                <span className="text-xl" style={{ color: "var(--primary)" }}>{intentIcon}{intentName}</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">Select your preferences</p>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 min-h-0">
          <div className="space-y-3">
            {options.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition ${
                  selected[option]
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                style={{
                  borderColor: selected[option] ? "var(--primary)" : "",
                  backgroundColor: selected[option] ? "var(--bg)" : ""
                }}
              >
                <input
                  type="checkbox"
                  checked={selected[option] || false}
                  onChange={() => handleCheckboxChange(option)}
                  className="w-5 h-5 rounded focus:ring-orange-500"
                  style={{ 
                    color: "var(--primary)",
                    "--tw-ring-color": "var(--primary)" 
                  } as React.CSSProperties}
                />
                <span className="text-black flex-1 text-sm leading-snug">{option}</span>
                {selected[option] && (
                  <svg className="w-5 h-5" style={{ color: "var(--primary)" }} fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="p-5 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 border border-black rounded-lg hover:bg-gray-100 transition text-black cursor-pointer text-sm font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 text-white rounded-lg hover:opacity-90 transition cursor-pointer text-sm font-medium"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Save Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}