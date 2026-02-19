// 2. Core types you must know (90% of QA usage)

type UserRole = "admin" | "viewer";

type LoginUser = {
  email: string;
  password: string;
  role: UserRole;
};

const user: LoginUser = {
  email: "a@test.com",
  password: "123",
  role: "admin",
};

console.log(user.password);

// 3. Functions in QA utilities
function buildEmail(prefix: string, domain = "test.com"): string {
  return `${prefix}@${domain}`;
}

function logStep(step: string): void {
  console.log(`STEP: ${step}`);
}

logStep("step");
