'use client';

import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

interface Step1SearchProps {
  formData: any;
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
}

export default function Step1Search({
  formData,
  updateFormData,
  nextStep,
}: Step1SearchProps) {
  const [searchQuery, setSearchQuery] = useState(formData.searchLocation || '');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState('');

  const searchLocation = async (query: string) => {
    if (query.length < 2) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&countrycodes=in&format=json&limit=8`
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
      setError('Please enter a location');
      return;
    }
    updateFormData(1, { searchLocation: searchQuery });
    nextStep();
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 style={{ color: 'var(--text)' }}>
          Fewer choices <span style={{ color: 'var(--primary)' }}>|</span> Better decisions
        </h1>
        <p className="mt-4 text-sm md:text-lg" style={{ color: 'var(--text-light)' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Top50</span>
          Properties curates only the most relevant homes and investments —
          based on <span className="font-semibold underline">intent</span>, not listings.
        </p>
      </div>

      {/* SEARCH */}
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setError('');
            }}
            placeholder="Where are you searching.."
            className="w-full rounded-full border-2 px-6 py-4 text-sm md:text-lg focus:outline-none"
            style={{
              borderColor: 'var(--primary)',
              color: 'var(--text)',
              backgroundColor: 'var(--bg-white)'
            }}
          />

          {/* SEARCH ICON */}
          <div className="absolute right-4 top-4" style={{ color: 'var(--primary)' }}>
            🔍
          </div>

          {/* SUGGESTIONS */}
          {showSuggestions && suggestions.length > 0 && (
            <div 
              className="absolute w-full shadow-xl border rounded-xl mt-2 max-h-60 overflow-auto z-50"
              style={{
                backgroundColor: 'var(--bg-white)',
                borderColor: 'var(--border)'
              }}
            >
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  onMouseDown={() => handleSelect(item)}
                  className="p-3 hover:bg-opacity-50 cursor-pointer text-sm"
                  style={{
                    color: 'var(--text)',
                    backgroundColor: 'var(--bg-white)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-white)'}
                >
                  📍 {item.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {error && (
          <p className="text-sm mt-2" style={{ color: 'var(--error)' }}>{error}</p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-8 w-full md:w-auto block mx-auto font-semibold px-8 py-4 rounded-lg transition btn-primary"
        >
          Choose Your Intent Next
        </button>
      </form>

      {/* PRIVACY */}
      <div className="text-center mt-10 text-sm md:text-base" style={{ color: 'var(--text-light)' }}>
        🔒 <span className="font-semibold">Privacy First</span>
        <br />
        We don’t ask who you are — until you find what fits.
      </div>
    </div>
  );
}