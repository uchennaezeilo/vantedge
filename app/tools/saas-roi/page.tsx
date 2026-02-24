
'use client';

import VantedgeCalculator from '../../components/VantedgeCalculator';

const saasConfig = {
  title: "AI Automation ROI Tool",
  description: "See how many billable hours you recover by automating content/tasks.",
  inputs: [
    { id: 'rate', label: 'Your Hourly Rate', min: 20, max: 200, step: 5, unit: '£', defaultValue: 50 },
    { id: 'hours', label: 'Weekly Manual Tasks (Hrs)', min: 1, max: 20, step: 1, unit: 'hrs', defaultValue: 5 }
  ],
  formula: (v: Record<string, number>) => (v.rate * v.hours) * 52,
  resultLabel: "Annual Billable Value Recovered",
  recommendations: [
    { name: "Monday.com Automation", link: "AWIN_LINK", reason: "Automates repetitive project workflows." },
    { name: "Jasper AI", link: "PARTNERSTACK_LINK", reason: "Reduces content creation time by 60%." }
  ]
};

export default function SaasRoiPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <VantedgeCalculator config={saasConfig} />
    </div>
  );
}
