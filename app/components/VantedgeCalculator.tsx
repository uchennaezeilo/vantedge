// components/VantedgeCalculator.tsx
'use client';
import { useState, useMemo } from 'react';

interface CalcConfig {
  title: string;
  description: string;
  inputs: { id: string; label: string; min: number; max: number; step: number; unit: string; defaultValue: number }[];
  formula: (vals: Record<string, number>) => number;
  resultLabel: string;
  recommendations: { name: string; link: string; reason: string }[];
}

export default function VantedgeCalculator({ config }: { config: CalcConfig }) {
  const [values, setValues] = useState(
    Object.fromEntries(config.inputs.map(i => [i.id, i.defaultValue]))
  );

  const result = useMemo(() => config.formula(values), [values, config]);

  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{config.title}</h2>
      <p className="text-gray-600 mb-6">{config.description}</p>
      
      <div className="space-y-4 mb-8">
        {config.inputs.map(input => (
          <div key={input.id}>
            <label className="block text-sm font-medium text-gray-700">
              {input.label}: <span className="text-blue-600 font-bold">{values[input.id]}{input.unit}</span>
            </label>
            <input
              type="range"
              min={input.min} max={input.max} step={input.step}
              value={values[input.id]}
              onChange={(e) => setValues({...values, [input.id]: parseFloat(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg text-center mb-8 border border-blue-100">
        <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">{config.resultLabel}</span>
        <div className="text-4xl font-black text-blue-900 mt-1">£{result.toLocaleString()}</div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-gray-800">Recommended for your results:</h3>
        {config.recommendations.map((rec, i) => (
          <div key={i} className="p-3 border rounded-lg flex justify-between items-center bg-gray-50 hover:border-blue-300 transition-colors">
            <div>
              <p className="font-bold text-sm text-gray-900">{rec.name}</p>
              <p className="text-xs text-gray-500">{rec.reason}</p>
            </div>
            <a href={rec.link} target="_blank" rel="sponsored" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold">
              View Deal
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}