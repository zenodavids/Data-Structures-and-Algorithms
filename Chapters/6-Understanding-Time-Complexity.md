# Understanding Time Complexity

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
    code // n * n unit of time f(n) = O(n^2)
  }
}
```

For the scenario above, the code been iterated by the for loops are the reason for the n x n (two for loops). hence the time function is **f(n^2) = n. which is O(n<sup>2</sup>)**

### Scenario 3:

Here, we have a _Nested_ **for loop**

like we said in scenario 1, we don't bother with the for loop itself but the code it iterates

```js
for (i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    code // n(n + 1)/2 unit of time ... f(n) = O(n^2)
  }
}
```

the scenario 3 looks like scenario 2 but the difference is the nested loop is dependent (**j < i**) on what the iterator (i) in the parent loop is.

### Scenario 4

this one is a bit tricky;

```js
p = 0;

for (i = 1; p < = n; i++) {
    p = p + i // O(n base2)

}
```

Here, the default for loop unit of time (n + 1) doesn't work here because the condition in the loop states that as long as p is less than or equals n (p < = n), not i. The loop stops once "p" is greater than "n". Since the loop stops in "k"(when p is greater than n), then we assume ;
**p = k(k + 1)/2**. which means the loop stops when **k(k + 1)/2 > n**.
time unit is **k x k / 2** simplified to k^2 >n. hence "k > $\sqrt{n}$ ". which is still called **O($\sqrt{n}$)**

> Any For loop that's "**i++**" has the **n + 1**,

### Scenario 5

this is also a bit tricky;

```js
for (i = 1; i < n; i = i * 2) {
  code //
}
```

in the above scenario, rather than the traditional "i++", "i = i x 2" is been used in this sense;

```js
i = 1 * 2 * 2 * 2 ... k = n
```

the above means that the loop keeps going on till it gets to k (we assume "k" to be when the "i" is less than "n" and the loop stops).
since it deals with the multiplication of 2, the it is safe to call it the power of 2 (<sup>2</sup>).

therefore;

```js
2^k = n
thus; k = log base2 n
```

in this case, rather than the the unit of time to be "n + 1", it becomes Olog<sub>2</sub>(n)

**Using the for loop in scenario 5;**
lets assume n is 8 in the first use case, and n is 10 in another use case

```js
for (i = 1; i < n; i = i * 2) {
  code // this unit of time is log n
}
```

|  **n = 8, i is;**   |  **n = 10, i is;**   | **i x 2** |
| :-----------------: | :------------------: | :-------: |
|          1          |          1           |     2     |
|          2          |          2           |     4     |
|          4          |          4           |     8     |
| 8 (stops iterating) |          8           |    16     |
|                     | 16 (stops iterating) |    32     |
|                     |                      |           |

**from the table above, assume n = 8;**
log 8 = 3 (means it iterated three times)
therefore;
log<sub>2</sub>2 = 3log<sub>2</sub>2 becomes 3

**from the table above, assume n = 10;**
log 10 = 3.2 (3.2 because it iterated at 16, not 10)
therefore;
log<sub>2</sub> 10 = 3.2
hence the log in this case is called the float value.

### Scenario 6

```js
for (i = n; i >= 1; i = i / 2) {
  code
}
```

in this case, **i is initialized to n**, the loop keeps going on as long as **i is greater than or equals 1** and stops when **i is less than 1**.ie;
**starting from i/n**, loops to **n/2**, **n/2<sup>2</sup>**, **n/2**<sup>3</sup>... **n/2**<sup>k</sup> (assume **k** is the figure that is makes **i less than 1**.)

Assume i is less than 1,\
therefore;\
n/2<sup>k</sup> < 1;\
making n/2<sup>k</sup> = 1\
n = 2<sup>k</sup>\
k = log<sub>2</sub>n\
hence, the time complexity is O(log<sub>2</sub>n)

### Scenario 7

```js
for (i = 0; i * i < n; i++) {
  code
}
```

Pretty straight forward.
i keeps incrementing as long as **i** _ **i** < **n** and stops when **i** _ **i** >= **n**.\
hence, i<sup>2</sup> = n\
i = $\sqrt{n}$

### Scenario 8

```js
for (i = 0; i < n; i++) {
  code
}
for (j = 0; j < n; j++) {
  code
}
```

The above is not a nested loop but two independent loops.\

first loop has n, second loop has n. hence, 2n\

time complexity remains O(n)

### Scenario 9

```js
p = 0

for (i = 1; i < n; i = i * 2) {
  p++
}
for (j = 1; j < p; j = j * 2) {
  code
}
```

the first loop is p = logn.\
 since the second loop uses the p variable of the first loop, second loop is log p.\
 0(log logn)

### Scenario 10

```js
for (i = 0; i < n; i++) {
  for (j = 1; j < n; j * 2) {
    code
  }
}
```

since this is a nested for loop, every code in the parent for loop's code block (including the child for loop) and the parent loop itself, has a unit time of n.

the nested for loop **for (j = 1; j < n; j x 2)** is **logn** (the first n because it is in a loop, the log because the increment is done via multiplication),

the implemented code in the nested for loop code block is also **logn** (the first n because it is in a loop, the log because the increment is done via multiplication in the child loop's code block).

hence the Time complexity is O(nlogn)

> From the above scenarios 1 - 10, we observe that any for loop that has the addition or subtraction sign is n unit of time.
> also any for loop with Multiplication or division is logn unit of time
