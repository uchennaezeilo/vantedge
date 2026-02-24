
'use client';

import VantedgeCalculator from '../../components/VantedgeCalculator';

const energyConfig = {
  title: "UK Smart Heating ROI Calculator",
  description: "Calculate how much you're wasting on heating empty rooms.",
  inputs: [
    { id: 'bill', label: 'Average Monthly Bill', min: 50, max: 500, step: 10, unit: '£', defaultValue: 150 },
    { id: 'rooms', label: 'Unused Rooms During Day', min: 1, max: 8, step: 1, unit: '', defaultValue: 2 }
  ],
  formula: (v: Record<string, number>) => Math.round((v.bill * 12) * (0.05 * v.rooms)), // Assumes 5% waste per unused room
  resultLabel: "Potential Annual Savings",
  recommendations: [
    { name: "Aqara Smart Radiator Valve", link: "AMAZON_LINK", reason: "Best for room-by-room control." },
    { name: "Tado° Smart Thermostat V3+", link: "CJ_LINK", reason: "Top-rated UK smart home energy saver." }
  ]
};

export default function EnergySaverPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <VantedgeCalculator config={energyConfig} />
    </div>
  );
}
