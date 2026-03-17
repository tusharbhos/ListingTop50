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
      className="fixed inset-0 z-50 flex flex-col"
      style={{ height: "80dvh", backgroundColor: 'var(--overlay)' }}
    >
      <div
        className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto flex flex-col overflow-hidden"
        style={{
          maxHeight: "95%",
          backgroundColor: 'var(--bg-white)'
        }}
      >
        {/* HEADER */}
        <div className="p-5 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex justify-between items-start gap-2">
            <div>
              <h2 className="text-md font-semibold flex items-center gap-2 flex-wrap" style={{ color: 'var(--text)' }}>
                <span className="text-xl">{intentIcon}{intentName}</span>
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Select your preferences</p>
            </div>
            <button
              onClick={handleClose}
              className="transition"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* OPTIONS LIST */}
        <div className="flex-1 overflow-y-auto p-5 min-h-0">
          <div className="space-y-3">
            {options.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition`}
                style={{
                  borderColor: selected[option] ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: selected[option] ? 'var(--bg-light)' : 'var(--bg-white)',
                }}
              >
                <input
                  type="checkbox"
                  checked={selected[option] || false}
                  onChange={() => handleCheckboxChange(option)}
                  className="w-5 h-5 rounded focus:ring-2"
                  style={{
                    color: 'var(--primary)',
                  }}
                />
                <span className="flex-1 text-sm leading-snug" style={{ color: 'var(--text)' }}>{option}</span>
                {selected[option] && (
                  <svg className="w-5 h-5" style={{ color: 'var(--primary)' }} fill="currentColor" viewBox="0 0 20 20">
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

        {/* FOOTER */}
        <div className="p-5 border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-light)' }}>
          <div className="flex items-center justify-between">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 border rounded-lg hover:bg-gray-100 transition cursor-pointer text-sm font-medium"
              style={{
                color: 'var(--text)',
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-white)'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 text-white rounded-lg hover:bg-opacity-90 transition cursor-pointer text-sm font-medium"
              style={{
                backgroundColor: 'var(--primary)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
            >
              Save Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}