import React from 'react';

export default function CategoryFilter({
  categories,
  active,
  onSelect,
}: {
  categories: string[];
  active: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect('All')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium ${active === 'All' ? 'bg-[#1d1d1f] text-white' : 'bg-white border border-black/8 text-[#1d1d1f]'}`}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium ${active === c ? 'bg-[#1d1d1f] text-white' : 'bg-white border border-black/8 text-[#1d1d1f]'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
