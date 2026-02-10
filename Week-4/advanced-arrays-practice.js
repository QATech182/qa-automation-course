const prices = [100, 200, 300];

const pricesWithTax = prices.map((p) => p * 1.5);
console.log(pricesWithTax); // [110, 220, 330]

const users = [
  { name: "Eric", role: "admin" },
  { name: "Aung", role: "user" },
];

const roles = users.map((u) => u.role);
console.log(roles); // ["admin", "user"]
