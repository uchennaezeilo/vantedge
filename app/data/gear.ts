export const gearDatabase = {
  "camping-uk": {
    title: "Wild Camping UK Essentials",
    description: "Personalized gear list for the British outdoors.",
    filters: [
      { id: "winter", label: "Winter/Cold Weather", icon: "❄️" },
      { id: "hiking", label: "Hiking/Backpacking", icon: "🥾" },
      { id: "family", label: "Family/Group Trip", icon: "👨‍👩‍👧" }
    ],
    items: [
      { name: "OEX Phoxx IIv2 Tent", link: "AMAZON_LINK", tags: ["hiking"], price: "£89" },
      { name: "Vango Nevis 300", link: "AMAZON_LINK", tags: ["family"], price: "£145" },
      { name: "Self-Inflating Sleeping Mat", link: "AMAZON_LINK", tags: ["winter", "hiking"], price: "£45" },
      { name: "Portable Gas Stove", link: "AMAZON_LINK", tags: ["family", "winter"], price: "£25" }
    ]
  },
  "back-to-school": {
    title: "University Tech Starter Kit",
    description: "Get organized for the new semester.",
    filters: [
      { id: "creative", label: "Art/Design Student", icon: "🎨" },
      { id: "commuter", label: "Commuter", icon: "🚌" }
    ],
    items: [
      { name: "iPad Air + Pencil", link: "AMAZON_LINK", tags: ["creative"], price: "£599" },
      { name: "Anker 737 Power Bank", link: "AMAZON_LINK", tags: ["commuter"], price: "£120" },
      { name: "Sony WH-1000XM5 (Noise Cancelling)", link: "AMAZON_LINK", tags: ["commuter", "creative"], price: "£299" }
    ]
  }
};