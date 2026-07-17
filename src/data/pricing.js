export const durations = [
  { months: 3, discount: 0, popular: false },
  { months: 6, discount: 10, popular: false },
  { months: 9, discount: 15, popular: true },
  { months: 12, discount: 20, popular: false },
];

export const tiers = [
  {
    name: "Boshlang'ich",
    range: "0–50 o'quvchi",
    prices: {
      3: { total: 600000, original: 600000 },
      6: { total: 1080000, original: 1200000 },
      9: { total: 1530000, original: 1800000 },
      12: { total: 1920000, original: 2400000 },
    },
  },
  {
    name: "Standart",
    range: "50–150 o'quvchi",
    prices: {
      3: { total: 1050000, original: 1050000 },
      6: { total: 1890000, original: 2100000 },
      9: { total: 2680000, original: 3150000 },
      12: { total: 3360000, original: 4200000 },
    },
  },
  {
    name: "Pro",
    range: "150–400 o'quvchi",
    prices: {
      3: { total: 1650000, original: 1650000 },
      6: { total: 2970000, original: 3300000 },
      9: { total: 4210000, original: 4950000 },
      12: { total: 5280000, original: 6600000 },
    },
  },
];

export const premiumTier = { name: "Premium", range: "400+ o'quvchi" };
