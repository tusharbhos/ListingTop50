"use client";

import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { Theme } from "../config/theme";
interface Step1SearchProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  theme: Theme;
}

export default function Step1Search({
  formData,
  updateFormData,
  nextStep,
  theme,
}: Step1SearchProps) {
  const [searchQuery, setSearchQuery] = useState(formData.searchLocation || "");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState("");

  const searchLocation = async (query: string) => {
    if (query.length < 2) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&countrycodes=in&format=json&limit=8`,
      );

      const data = await res.json();
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (err) {
      console.error(err);
    }
  };

  const debouncedSearch = useCallback(debounce(searchLocation, 400), []);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel();
  }, [searchQuery]);

  const handleSelect = (place: any) => {
    setSearchQuery(place.display_name);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!searchQuery) {
      setError("Please enter a location");
      return;
    }

    updateFormData(1, { searchLocation: searchQuery });
    nextStep();
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-black">
          {theme?.description1}
          <span style={{ color: "var(--primary)" }}> | </span>
          {theme?.description2}
        </h1>

        <p className="mt-4 text-black text-sm md:text-lg">
          <span className="font-semibold" style={{ color: "var(--primary)" }}>
            {theme?.name || "Top50"}
          </span>{" "}
          {theme?.paragraph || "tailored to your needs"} based on{" "}
          <span className="font-semibold underline">intent</span>, not listings.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setError("");
            }}
            placeholder="Where are you search.."
            className="w-full rounded-full border-2 px-6 py-4 text-sm md:text-lg focus:outline-none focus:ring-2 text-black"
            style={
              {
                borderColor: "var(--primary)",
                "--tw-ring-color": "var(--primary)",
              } as React.CSSProperties
            }
          />

          <div
            className="absolute right-4 top-4"
            style={{ color: "var(--primary)" }}
          >
            🔍
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute w-full bg-white shadow-xl border rounded-xl mt-2 max-h-60 overflow-auto z-50">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  onMouseDown={() => handleSelect(item)}
                  className="p-3 hover:bg-orange-50 cursor-pointer text-sm text-black"
                  style={
                    { "--tw-hover-bg": "var(--hover)" } as React.CSSProperties
                  }
                >
                  📍 {item.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          className="mt-8 w-full md:w-auto block mx-auto text-white font-semibold px-8 py-4 rounded-lg transition hover:opacity-90"
          style={{ backgroundColor: "var(--primary)" }}
        >
          Choose Your Intent Next
        </button>
      </form>

      <div className="text-center mt-10 text-black text-sm md:text-base">
        🔒 <span className="font-semibold">Privacy First</span>
        <br />
        We don’t ask who you are — until you find what fits.
      </div>
    </div>
  );
}
