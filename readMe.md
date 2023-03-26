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
