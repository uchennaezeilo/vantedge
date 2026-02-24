'use client';
import { useState } from 'react';

export default function GearChecklist({ data }: { data: any }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (id: string) => {
    setActiveFilters(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const filteredItems = data.items.filter((item: any) => 
    activeFilters.length === 0 || item.tags.some((t: string) => activeFilters.includes(t))
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border rounded-2xl shadow-sm">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{data.title}</h2>
      <p className="text-gray-500 mb-8">{data.description}</p>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {data.filters.map((f: any) => (
          <button
            key={f.id}
            onClick={() => toggleFilter(f.id)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              activeFilters.includes(f.id) 
              ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>

      {/* The List */}
      <div className="space-y-4">
        {filteredItems.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600" />
              <div>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-blue-600 font-medium">{item.price}</p>
              </div>
            </div>
            <a 
              href={item.link} 
              target="_blank" 
              rel="sponsored" 
              className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Check Price
            </a>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <p className="text-center py-10 text-gray-400">Select a category above to see recommended gear.</p>
        )}
      </div>
    </div>
  );
}