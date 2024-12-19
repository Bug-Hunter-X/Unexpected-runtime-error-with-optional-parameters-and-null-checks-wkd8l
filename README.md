# Unexpected Runtime Error with Optional Parameters and Null Checks in TypeScript

This repository demonstrates a subtle bug in TypeScript related to type guards, optional parameters, and null checks.  Despite using type guards and null checks, a runtime error can occur when an undefined value is passed to a function expecting a string or null. This is because TypeScript's type narrowing doesn't always perfectly handle the case where the parameter is undefined.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` to see the erroneous code.
3. Compile and run the code. You will observe a runtime error when calling the `greet` function with an `undefined` argument.
4. Open `bugSolution.ts` to see the corrected implementation.

## Bug Explanation

The issue arises from how TypeScript handles type narrowing with optional parameters. While the `if (name === null)` check handles null values correctly, it doesn't explicitly handle `undefined`.  `undefined` is implicitly assigned when an optional parameter is omitted, causing the type check to fail at runtime.

## Solution

The solution is to explicitly check for both `null` and `undefined` or to use the optional chaining operator (?.)  to safely access the property if it exists, thereby preventing the runtime error. The corrected code in `bugSolution.ts` demonstrates the solutions.

## Lessons Learned

This example highlights the importance of thoroughly testing your TypeScript code, especially when dealing with optional parameters and potentially nullable values.  Always consider all possible states of your variables to prevent unexpected behavior at runtime.