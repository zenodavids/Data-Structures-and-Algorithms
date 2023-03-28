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
    p = p + i // O()

}
```

Here, the default for loop unit of time (n + 1) doesn't work here because the condition in the loop states that as long as p is less than or equals n (p < = n), not i. The loop stops once "p" is greater than "n". Since the loop stops in "k"(when p is greater than n), then we assume ;
**p = k(k + 1)/2**. which means the loop stops when **k(k + 1)/2 > n**.
time unit is **k x k / 2** simplified to k^2 >n. hence "k > root of n ". which is still called **O(root of n)**

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
thus; k = log <sub>2</sub> n
```

in this case, rather than the the unit of time to be "n + 1", it becomes Olog<sub>2</sub>(n)
