import React from 'react';

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="w-full">
      <label className="sr-only">Search articles</label>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles, topics, keywords..."
        className="w-full bg-white border border-black/8 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d1d1f]/10"
      />
    </div>
  );
}
