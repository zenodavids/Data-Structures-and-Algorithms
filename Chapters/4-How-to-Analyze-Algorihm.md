# How to analyze an algorithm

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
