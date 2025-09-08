## 1. Difference between `var`, `let`, and `const`

- **`var`**

  - Function-scoped.
  - Can be redeclared and updated.
  - Hoisted (moved to the top of scope) but initialized with `undefined`.
  - Not recommended in modern JavaScript due to unexpected behavior.

- **`let`**

  - Block-scoped.
  - Can be updated but **cannot be redeclared** in the same scope.
  - Hoisted but not initialized (Temporal Dead Zone).

- **`const`**
  - Block-scoped.
  - Cannot be updated or redeclared.
  - Must be initialized at the time of declaration.

---

## 2. Difference between `map()`, `forEach()`, and `filter()`

- **`map()`**

  - Iterates over each element of an array.
  - Returns a **new array** with transformed elements.

- **`forEach()`**

  - Iterates over each element of an array.
  - Does **not** return a new array (returns `undefined`).

- **`filter()`**
  - Iterates over each element of an array.
  - Returns a **new array** with elements that pass a condition.

---

## 3. What are arrow functions in ES6?

- Use `=>` syntax.
- Do not have their own `this` binding (inherit `this` from parent scope).

```js
// Arrow function (single line, implicit return)
  const add = (a, b) => a + b;

// Arrow function with multiple statements
const multiply = (a, b) => {
const result = a \* b;
return result;
};

// Arrow function with one parameter (no parentheses needed)
const square = n => n \* n;

// Arrow function with no parameters
const greet = () => console.log("Hello, Arrow Function!");

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

## 4. How does destructuring assignment work in ES6?

Destructuring assignment helps to **destructure values** from arrays or objects into individual variables.

```js
// Array Destructure

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); //2
console.log(c); //3

// Object Destructure

const user = { name: "Ashik", age: 25 };
const { name, age } = user;
console.log(name); // Ashik
console.log(age); // 25
```

## 5. Explain template literals in ES6. How are they different from string concatenation?

Template literals (introduced in ES6) are a new way to work with strings.


### Key Features:

- Use **`` backticks (`) ``** instead of single (`'`) or double (`"`) quotes.
- Support **string interpolation** with `${expression}`.
- Allow **multi-line strings** without `\n`.
  let name = "Ashik";
  let age = 25;

```js
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
// Hello, my name is Ashik and I am 25 years old.
```
