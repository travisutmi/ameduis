// Example usage within a function
function exampleFunction() {
    let isExpr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    console.log(isExpr);
}

// Calling the function with various arguments
exampleFunction();          // Output: true (default case)
exampleFunction(1);         // Output: true (only one argument, so default to true)
exampleFunction(1, false);  // Output: false (second argument explicitly passed)
