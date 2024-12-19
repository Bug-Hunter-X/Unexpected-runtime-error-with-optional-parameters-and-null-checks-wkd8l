function greet(name?: string): string {
  if (name === undefined || name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

// Alternatively, using optional chaining:
function greet2(name?: string): string {
  return `Hello, ${name ?? 'world'}!`;
}

console.log(greet()); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(null)); // Output: Hello, world!
console.log(greet2()); // Output: Hello, world!
console.log(greet2("Bob")); // Output: Hello, Bob!