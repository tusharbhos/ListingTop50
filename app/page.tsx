"use client";

import { useState } from "react";
import Step1Search from "./components/Step1Search";
import Step2Intent from "./components/Step2Intent";
import Step4Filters from "./components/Step3Filters";
import Step5Contact from "./components/Step4Contact";
import ProgressBar from "./components/ProgressBar";
import { useThemeStyles } from "./hooks/useThemeStyles";

export default function Home() {
  const { getHeadingClass, getBgClass, getTextClass } = useThemeStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    searchLocation: "",
    selectedIntents: [],
    selectedSubOptions: {} as Record<string, string[]>,
    filters: {
      budgetRange: "",
      possessionTimeline: "",
      decisionTimeline: "",
      purpose: "",
    },
    contact: {
      name: "",
      whatsapp: "",
      email: "",
    },
  });

  const updateFormData = (step: number, data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Search
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2Intent
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Step4Filters
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Step5Contact
            formData={formData}
            updateFormData={updateFormData}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: "url('/cityscape.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <ProgressBar currentStep={currentStep} totalSteps={4} />

          {/* Step Content */}
          <div className={`${getBgClass("light")} backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8`}>
            {renderStep()}
          </div>
        </div>
      </div>
    </main>
  );
}