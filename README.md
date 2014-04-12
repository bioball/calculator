I was given this as a coding question during my interview with ClassDojo--to build a calculator web app with a UI.

During the interview, I ended up just outputting the result of an `eval`, but was intrigued enough by the question that I decided to revisit the question and rewrite the business logic.

The logic is based off creating partially applied functions through `Function.prototype.bind`, and sending them into a stack. Calculation simply becomes a function of reducing the partially applied functions to output the final result.

I'm quite a fan of this pattern, and here's a simplified example:

````
// basic function that sums two numbers
var add = function(a, b){
  return a + b;
};

var stack = [];

// push partially applied functions that respectively, when invoked, already has 1, 2, and 3 respectively as their first arguments
stack.push(add.bind(null, 1));
stack.push(add.bind(null, 2));
stack.push(add.bind(null, 3));

// seed the result
var result = 0;
while(stack.length){
  result = stack.pop()(result);
}

result
// => 6
````

Why is this useful? Well.. it cleans up logic perfectly for something like a calculator function. When you press '+' on a calculator, it doesn't add two numbers immediately, but it prepares an addition for whatever number next gets input. Using this pattern also really easily allows us to control order of operations (explore my code in mainController if you'd like to see how it's done).