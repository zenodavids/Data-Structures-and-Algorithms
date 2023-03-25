# Algorithm

An algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.

## Algorithm Analysis

the evaluation of an algorithm depends on;

- Time Complexity (the amount of time an algorithm has to run)
- Space Complexity (the amount of memory taken by an algorithm when it is run)

### How to represent Complexity

We do this, using Asymptotic notations. by this we mean mathematical tools to represent time ans space complexity. this tools include;

- **Big-O Notation** - Best For Worst case scenarios.✔️
- **Theta Notation** - Best For Average case scenarios. ❌
- **Omega Notation** - Best For Best Case Scenarios.❌

# The Big-O Notation

This describes the complexity of an algorithm using **algebraic** terms.

It has two main Characteristics;

- It is expressed in terms of the input,
- it focuses on the bigger picture without getting caught up in unimportant details.

## Using Time Complexity in the Big-O Notation;

using an example;

> **Find the sum of first "n" natural numbers from 1 to n. e.g; summation(4) returns sum = 10. 1+2+3+4 = 10**

Here is the supposed answer;

```js
const summation = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
```

**using Big-o time Complexity, we count a number of times a statement executes based on the input size.**
with this, assuming _n_ = 4 in the above code snippet;

- line 2 will execute once,
- line 4 will execute four times (i = 1 till i = 4. the for loop in line 3 is just a repetition of line 4)
- line 6 executes once.

Hence, **time complexity is dependent on the input size (n). as the size of the input increases, the complexity also increases.**
due to the loop, we can call this **Linear** O(n) because n is executed based on the input..

Below is another algorithm for the problem like above

```js
const summation = (n) => (n * (n + 1)) / 2
```

we call this **constant Time complexity** O(1) because in respect of what "n" is, the code in the block code is executed once.

## Using Space Complexity in the Big-O Notation;

- **O(1) - Constant:**
  if the memory needed doesn't depend on the input size, the space is constant. eg; sorting algorithm which sort between the array with using additional arrays.
- **O(n) - Linear:**
  where the Extra space needed grows as the input size grows.
- **O(log n) - Logarithmic:**
  where the Extra space needed grows but not as the input size.

## Big-O of Objects and Arrays

#### Objects

An object is a collection of key value pairs.

```js
const person = {
  firstName: 'Zeno',
  lastName: 'Davids',
}
```

- to insert a property, the time complexity is constant - O(1)
- to remove a property, the time complexity is constant - O(1)
- Accessing a property (eg; person.firstName) is constant - O(1)
- Search for a value is linear because you might have to search through a the properties in the object - O(n)

**Few methods on Objects**

- Object.keys() returns an array of all the keys in an object - O(n)
- Object.values() returns an array of all the values in an object - O(n)
- Object.entries() -returns an array whose elements are arrays O(n)

#### Arrays

An array is an ordered collection of values.
using the Big-O algorithm, we start at index 0 and increment by 1

```js
const odd = [1, 3, 5, 7, 9]
```

- insert or remove a value at the **end of the array**, the time complexity is constant - O(1)
- insert or remove a value at the **beginning of the array**, the time complexity is constant - O(n) because the index has to be reset from the remaining elements in the array.
- Accessing a property is constant - O(1)
- Search for an element is linear because you might have to search through a the elements in the array - O(n)

**Few methods on Arrays**

- push/pop - O(1)
- shift/unshift/concat/slice/splice - O(n)
- forEach/map/filter/reduce -O(n)

# The Big-O guide

1. Calculation is not dependent on input size - O(1)
2. Loop - O(n)
3. Nested loops - O(n^2)
4. Input size reduced by half - O(log n)

## Big O Maths Algorithm Examples:

### Problem 1 : fibonacci Sequence

Question: Given the number 'n', find th first 'n' elements of the Fibonacci sequence.
In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
The first two numbers of the sequence are 0 and 1.
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(4) = [0,1,1,2]

```js
const fibonacci = (n) => {
  // start with the first two numbers that always start a fibonacci
  let fib = [0, 1]

  //  populate the third element till "n"
  // so we start at the index 2 since we already have indexes 0 and 1
  // iterate until we have "n" element in the array.
  for (let index = 2; index < n; index++) {
    // add the first two index in front of "n" to get n
    fib[index] = fib[index - 1] + fib[index - 2]
  }

  return fib
}

console.log(fibonacci())
```

in the above fibonacci problem, the Big-O happens in line 9 since it contains just one for loop. Hence, Big-O = O(n).

> As the value of n increases, so does it's time complexity

### Problem 2 : Factorial of a number

Given an integer 'n', find the factorial of that integer
In mathematics, the factorial of a non-negative integer 'n' denoted n!, is the product of all positive integers less than or equal to 'n'

```js
const factorial = (n) => {
  // since the factorial of 0 or 1 is 1, we initialize fact's value to 1
  let fact = 1

  // since the multiplication of 1 against a number is 1, start the iteration at 2
  for (let index = 2; index <= n; index++) {
    fact = fact * index
  }

  return fact
}

console.log(factorial(5))
```

the Big-O happens in line 7 since it contains just one for loop. Hence, Big-O = O(n).

> the Big-o here is O(n)

### Problem 3 : Prime number

Find a natural number 'n' determine if the number is prime or not.

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

isPrime(5) = true(1 _ 5 or 5 _ 1)
isPrime(4) = false (1 _ 4 or 2 _ 2 or 4 \* 1)

```js
const isPrime = (n) => {
  // since numbers below two cannot be prime numbers
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    // since n is greater than 1, check if its divisible by any small number
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime())
```

the Big-O happens in line 8 since it contains just one for loop. Hence, Big-O = O(n).

> the Big-o here is O(n) **but if we change line 6 to**

```js
for (let i = 2; i <= Math.sqrt(n); i++) {}
```

> then the Big-O becomes O(sqrt(n)) because as the number of n increases, size of the loop increases but not in the same proportion.

### Problem 4 : Power of 2

Given a positive integer 'n', let's determine if the number is a power of 2 or not.

A number is a power of two if it is divided by 2 and leaves no remainder.

Below are three solutions to this problem;

```js
const isPowerOfTwo = (n) => {
  // since numbers below two cannot be PowerOfTwo numbers
  if (n === 1) {
    return true
  }
  for (let i = 2; i <= n; i++) {
    // since n is greater than 1, check if its divisible by any small number
    if ((n === 1 || n % 2) === 0) {
      return true
    }
  }
  return false
}
```

> Here, Big-O is O(n)

```js
const isThePowerOfTwo = (n) => {
  // since numbers below two cannot be PowerOfTwo numbers
  if (n < 1) {
    return false
  }
  while (n > 1) {
    // since n is greater than 1, check if its not divisible by 2
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}
```

> The Big-O here is O(log n) since it is divided by 2

```js
const isThePowerOfTwo = (n) => {
  // since numbers below two cannot be PowerOfTwo numbers
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}
```

> **Here the Big-O is O(1)**

# Recursion

This basically when a function calls itself.

> **Note :** Every recursion solution needs to have a base case - a condition to terminate the recursion.
> Recursion might simplify solving a problem, but it does not always translate to a faster solution.

### Problem 1 : Recursive Fibonacci Sequence

Given a number 'n', find the nth element of the fibonacci sequence.
