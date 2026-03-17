"use client";

import { useThemeStyles } from "../hooks/useThemeStyles";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const { getHeadingClass, getTextClass, getBgClass, getGradientClass } = useThemeStyles();

  const steps = [
    { number: 1, label: "Location" },
    { number: 2, label: "Intent" },
    { number: 3, label: "Filters" },
    { number: 4, label: "Contact" },
  ];

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* Step Indicators */}
      <div className="flex justify-between mb-2 relative">
        {/* Background line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 -z-10" />
        <div
          className={`absolute top-4 left-0 h-0.5 ${getGradientClass()} transition-all duration-1000 ease-out -z-10`}
          style={{ width: `${progressPercentage}%` }}
        />

        {steps.map((step) => {
          const isActive = step.number <= currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div key={step.number} className="flex flex-col items-center">
              {/* Circle with glow for current */}
              <div className="relative">
                {isCurrent && (
                  <div
                    className="absolute -inset-2 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                )}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 
                    transition-all duration-500
                    ${
                      isActive
                        ? `${getBgClass("primary")} text-white shadow-lg`
                        : "border-gray-300 bg-white text-black"
                    }
                    ${isCurrent ? "scale-110 ring-4" : ""}
                  `}
                  
                >
                  {isActive && step.number < currentStep ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
              </div>

              <span
                className={`text-sm mt-2 font-semibold hidden sm:block transition-colors duration-300 ${
                  isActive ? getTextClass("primary") : "text-black"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Premium Progress Bar */}
      <div className="relative pt-4">
        {/* Background with inset shadow */}
        <div className="overflow-hidden h-3 rounded-full bg-gray-200 shadow-inner">
          {/* Animated progress */}
          <div
            className={`relative h-full rounded-full ${getGradientClass()} transition-all duration-1000 ease-out`}
            style={{ width: `${progressPercentage}%` }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}