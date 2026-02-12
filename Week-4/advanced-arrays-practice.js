// .map() => New array with modified values
const prices = [100, 200, 300];

const pricesWithTax = prices.map((p) => p * 1.5);
console.log(pricesWithTax); // [110, 220, 330]

// Perfect for validating API response fields
const users = [
  { name: "Eric", role: "admin" },
  { name: "Aung", role: "user" },
];

const roles = users.map((u) => u.role);
console.log(roles); // ["admin", "user"]

const rolesFilters = users.filter((u) => u.role === "admin");
console.log("Admin User Account: ", rolesFilters);

// .filter() => remove unwanted data
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);

const testResults = [
  { test: "login", status: "PASS", Time: 270 },
  { test: "payment", status: "FAIL", Time: 250 },
];

const failedTests = testResults.filter((t) => t.status === "FAIL");
console.log(failedTests);

const passTests = testResults.filter((t) => t.status === "PASS");
console.log(passTests);

// find() – get ONE item
const userTypes = ["admin", "guest", "user"];
const found = userTypes.find((u) => u === "admin");
console.log(found); // admin

const apiErrors = [{ code: 200 }, { code: 401 }, { code: 500 }];
const authError = apiErrors.find((e) => e.code === 200);
console.log(authError);

// findIndex() -
console.log("findIndex(): " + userTypes.findIndex((u) => u === "user"));

// some() => true false → ❌ at least one failure | vs every() → ✅ all passed
const statuses = ["PASS", "PASS", "FAIL"];

console.log(statuses.some((s) => s === "FAIL")); // true
console.log(statuses.every((s) => s === "PASS")); // false

console.log(apiErrors.some((s) => s.code === 200));
console.log(apiErrors.every((s) => s.code === 200));

// reduce() – advanced but powerful
// Used for totals, summaries, reports

const numbersTwo = [10, 20, 30];
const total = numbersTwo.reduce((sum, n) => sum + n, 0);
console.log(total); // 60

// forEach()
const fruits = ["banana", "kiwi", "orange"];

console.log("forEach(): ");
fruits.forEach((f) => console.log(" -", f));

console.log("Numbers are positive? - " + numbersTwo.every((n) => n > 0));

// Chaining Methods Together => .filter().map().every().find()
// You can combine multiple array methods for powerful one-liners.

const resultTwo = numbersTwo
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .every((num) => num > 50);

console.log(resultTwo);

// Scenario 1: Price Validation (E-commerce)
// Chaining Methods Exercises
// Only even-priced items are eligible for discount
// Discounted price 10% or 0.9 must be greater than $50
// Test should PASS only if all discounted prices meet rule

const retailPrices = [40, 52, 60, 75, 80];

const isValidDiscount = retailPrices
  .filter((p) => p % 2 == 0) // eligible items
  .map((p) => p * 0.9) // 10% discount
  .every((p) => p > 50); // rule check

console.log("isValidDiscount: " + isValidDiscount);

// Scenario 2: Payment Amount Validation (FinTech)
// Only even transaction IDs are valid (legacy system)
// Amount is squared for risk scoring
// Risk score must be above threshold $50

const transactionAmounts = [6, 8, 10, 3, 12, 60];

const isRiskAcceptable = transactionAmounts
  .filter((amount) => amount % 2 === 0)
  .map((amount) => amount * amount)
  .every((score) => score >= 50);

console.log("isRiskAcceptable: " + isRiskAcceptable);

// Scenario 3: User Age Validation (Registration Flow)
// Only even ages (system constraint)
// Age score = age × age
// Must be above compliance threshold

const userAges = [16, 18, 21, 22];

const isAgeValid = userAges.filter;
