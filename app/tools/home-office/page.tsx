'use client';

import VantedgeCalculator from '../../components/VantedgeCalculator';

const ergoConfig = {
  title: "The 'Back Pain' Budgeter",
  description: "Estimated cost of physio vs. investing in high-end ergonomics.",
  inputs: [
    { id: 'pain', label: 'Back Pain Frequency (1-10)', min: 1, max: 10, step: 1, unit: '', defaultValue: 4 },
    { id: 'physio', label: 'Physio Session Cost', min: 40, max: 120, step: 5, unit: '£', defaultValue: 60 }
  ],
  formula: (v: Record<string, number>) => (v.pain > 5 ? v.physio * 12 : v.physio * 4),
  resultLabel: "Estimated Annual Health Cost",
  recommendations: [
    { name: "Herman Miller Aeron (Refurbished)", link: "EBAY_LINK", reason: "The gold standard for spinal health." },
    { name: "Steelcase Leap V2", link: "AMAZON_LINK", reason: "Best adjustable support for long dev hours." }
  ]
};

export default function HomeOfficePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <VantedgeCalculator config={ergoConfig} />
    </div>
  );
}
