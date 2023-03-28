# Introduction to Algorithms (Beginner Level)

**Algorithm** is basically procedures for solving problems. **Programming** is also the step by step solution of solving problems.

Software Engineering has two phases;

- **Design**
- **Implementation**

to understand algorithm and the phases of software engineering, we need to first understand the difference between algorithm and programming

|             **Algorithm**              |           **Program**            |
| :------------------------------------: | :------------------------------: |
|                 Design                 |          Implementation          |
|          Algorithm Knowledge           |            programmer            |
|    any Language ie; maths, english     |       Programming Language       |
| Don't need Hardware/software specifics | need Hardware/software specifics |
|                Analyze                 |             Testing              |

## Priori Analysis and Posteriori Testing

- **Priori Analysis:**
  Breaking the algorithm into further details and finding the time and space consumed by an algorithm

- **Posteriori Testing:**
  Testing the algorithm to see if it works as expected and finding out how many time and bytes an algorithm can take.

the table below breaks it further 👇👇🏾

|          **Priori Analysis**           |      **Posteriori Testing**      |
| :------------------------------------: | :------------------------------: |
|               Algorithm                |             program              |
|        independent of language         |        language dependent        |
|    any Language ie; maths, english     |       Programming Language       |
| Don't need Hardware/software specifics | need Hardware/software specifics |
|        Time and space function         |       watch time and bytes       |
|                Analyze                 |             Testing              |

## characteristics of Algorithm

- **Input** :
  Every Algorithm must have at least an input - 0 0r more

- **Output** :
  Every algorithm must have an output, or a return statement at least

- **Definiteness** :
  All algorithm must be clearly stated or defined.

- **Finiteness** :
  all algorithm must come to a conclusion. ie; have an end or a close.

- **Effectiveness** :
  all algorithm must be effective. ie; every solution towards the conclusion of any algorithm must be useful.

## How to write an algorithm

Below is A simple Algorithm to swap two numbers;

```js
algorithm swap( a, b )
// begin algorithm
    begin

// initialize temp to a
    temp := a ;
    // swap a and b
    a := b;

    b := temp;

// end algorithm
    end

```

- Don't bother about what programming language or datatypes, that can be decided during implementation, not design.

- you can use any syntax. there is no fixed syntax for writing an algorithm

- algorithm writing should be understood by anyone

## How to analyze an algorithm

The below are factors to consider when developing an algorithm;

- Time
- Space / memory
- Network
- Power
- CPU logs

> the first two factors are the most important

Using the example above, To access the **unit of time function** and the**unit of space** the **swap** algorithm uses;

```js
algorithm swap( a, b )
// begin algorithm
    begin

// initialize temp to a
    temp := a ;
    // swap a and b
    a := b;

    b := temp;

// end algorithm
    end
```

|   **unit of Time function**    |      **unit of Space function**       |
| :----------------------------: | :-----------------------------------: |
|  _temp = a_ is 1 unit of time  |        _a_ is 1 unit of space         |
|   _a = b_ is 1 unit of time    |        _b_ is 1 unit of space         |
|  _b = temp_ is 1 unit of time  |       _temp_ is 1 unit of space       |
| the time function **f(n) = 3** | the space function **s(n) = 3 words** |

The **unit of time** is 1 and hence **_constant_** because no matter the variable size, it doesn't not affect the time. so hence the O(1)

> In cases like "**z = 5 x a + 6 x b**", the constant still remains one because the size of the variable is figures still wont affect the time complexity. Though it can be broken down to 3 constants (5 x a, 6 x b, and summing the results of "5 x a" and "6 x b")

same goes o the **unit of space** - no matter the length of words, it still remains 1 (which is constant) and doesn't affect the space. hence O(1)

## The Frequency count method

### Example 1 : sum up all the numbers in an array;

```js
// here, A is the array variable'
// n is the number of elements/items in the array
Algorithm sum(A, n){
    begin
    // start Algorithm

    s = 0;
    for(i = 0; i < n; i++){
        // loop the array
        s += A[i];
        // sum up all the element
    }

    return s
    end
    // end algorithm
}
```

#### The Time complexity would be;

- **s = 0;** is 1 unit of time,

- **for(i = 0; i < n; i++)** is n + 1 unit of time. Here's why;

  - **i = 0;** is 1 unit of time because it _repeats just once_, hence the array length doesnt affect it.
  - **i < n** is "_n + 1_" since the time complexity is determined by the length of the array.
    > To understand this better, assume n is 5(where n is the array length), when looping over the said array, since i is 0 (**i = 0**;) the loop iterates till it get to 4 (checking 0 - 4 means it iterated 5 times. 0, 1, 2, 3 ,4.) then on the sixth iteration, it stops because **i < n**. that last one is constant because no matter the n value, it will always have an extra 1.
  - **i++** "_n_" unit of time because it _repeats "n" times_, thus the increment depends on the length of the array.

    Hence, we are bothered about **i < n** only, since it is where everything happens.

    > **Note : All single loops time complexities are always n + 1**

- **s += A[i];** is n unit of time because as the loop above iterates, the changes affects it.
- **return s** is 1 unit of time.

the overall Time function (f(n)) will be **f(n) = 2n + 3** hence, O(n)

#### The Space complexity would be;

Get the variables used in the algorithm and check the space / they occupy. in this case;

- A - 1 unit of space
- S - 1 unit of space
- i - 1 unit of space
- n - n unit of space
  > because the n unit of space depends on the array length

hence the space complexity is **s(n) = n + 3** hence, O(n)

### Example 2 : Find the sum of two matrix ;

```js
Algorithm Add(A, B, n){
  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      C[i][j] = A[i][j] + B[i][j];
    }
  }
}
```

this is a case of a _nested for loop_

#### The Time complexity would be;

- **for(i = 0; i < n; i++)** is n + 1 unit of time
- **for(j = 0; j < n; j++)** is n x (n + 1) unit of time.
  > since this loop is nested inside the original loop, it is n unit of time. that is, it depends on the n time the parent loop runs multiplied by n + 1 (recall that all loops are automatically n + 1)
- **C[i][j] = A[i][j] + B[i][j]** is n x n unit of time.
  > this is so because it is inside a loop so it n unit of time is dependent of the loop. and the second n because it is housed in the child loop.

Hence, the time complexity is **f(n) = 2n^2 + 2n + 1** which is O(n^2)

#### The Space complexity of the variables use in the algorithm would be;

- A - n^2
- B - n^2
- C - n^2
- i - 1
- j - 1
- n - 1

Hence, the Space complexity is **s(n) = 3n^2 + 3** which is O(n^2)

### Example 3 : Find the multiplication of two matrix ;

```js
Algorithm Multiply(A, B, n){
  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      C[i,j] = 0;
      for(k = 0; k < n; k++){
        C[i, j] = C[i, j] + A[i, k] * B[k, j];
      }
    }
  }
}


```

this is a case of a _nested for loop, nesting another for loop_

#### The Time complexity would be;

- **for(i = 0; i < n; i++)** would be **n + 1** unit of time
  > by default all for loops are n + 1 unit of time
- **for(j = 0; j < n; j++)** would be **(n + 1)n** unit of time
  > n + 1 by default, and the second n since it is in a far loop, hence its unit of time is dependent on the for loop nesting it
- **C[i,j] = 0** is **n x n** unit of time
  > since it is inside a nested for loop.
- **for(k = 0; k < n; k++)** would be **(n + 1)n x n** unit of time
- **C[i, j] = C[i, j] + A[i, k] \* B[k, j]** would be **n x n x n** unit of time

Hence, the time complexity is **f(n) = 2n^3 + 3n^2 + 2n + 1** which is O(n^3)

#### The Space complexity of the variables use in the algorithm would be;

- A - n^2
- B - n^2
- C - n^2
- i - 1
- j - 1
- k - 1
- n - 1

Hence, the Space complexity is **s(n) = 3n^2 + 4** which is O(n^2)

# Time Complexity

Let's try to understand time complexity a little deeper using the case scenarios below;

### Scenario 1:

say we have a simple **for loop**

As we dive deeper into complexities in algorithm, we don't actually need the for loop unit time, but the unit time of the code the for loop actually iterates.

```js
for (i = 0; i < 0; i++) {
  code // n unit of time = O(n)
}

/* or */

for (i = n; i > 0; i--) {
  code // n unit of time = O(n)
}

/* or */

for (i = 1; i < n; i = i + 2) {
  code // n/2 unit of time = O(n)
}

/* or */

for (i = 1; i < n; i = i + 20) {
  code // n/20 unit of time = O(n)
}
```

Looking at the scenario above, our major concern is actually the for loop's code block, which is **n**, hence the time function is **f(n) = n. which is O(n)**

### Scenario 2:

Here, we have a _Nested_ **for loop**

like we said in the above scenario, we dont bother with the for loop itself but the code it iterates

```js
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    code // n * n unit of time n * n = O(n^2)
  }
}
```

For the scenario above, the code been iterated by the for loops are the reason for the n x n (two for loops). hence the time function is **f(n^2) = n. which is O(n^2)**

### Scenario 3:

Here, we have a _Nested_ **for loop**

like we said in the above scenario, we dont bother with the for loop itself but the code it iterates

```js
for (i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    code // n * n unit of time n * n = O(n^2)
  }
}
```
