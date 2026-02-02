/* Week 3 - Assignment 3

# Homework 2: OBJECTS ONLY
**File:** `objects-practice.js`

## 📌 Rules
- ❌ Do NOT copy objects from slides
- ❌ Do NOT use loops unless explicitly asked
- ✅ Create your own object
- ✅ Use `this` inside object methods

## PART 1: CREATE AN OBJECT

### 🧱 Task 1: Object Creation

Create **one object** that represents something of your choice. (Examples: car, student, phone, video game, book, movie, etc.)
Your object must include:
- At least **4 properties**
- At least **1 string**
- At least **1 number**
- At least **1 nested object**
*/

const student = {
  name: "Eric",
  age: 42,
  isStudent: true,
  address: {
    city: "Brooklyn",
    state: "NY",
    zip: "11229",
  },
};

/* ## PART 2: OBJECT METHODS

### ⚙ Task 2: Description Method

Add a method that:

1. Uses `this`
2. Returns a sentence describing the object
*/
