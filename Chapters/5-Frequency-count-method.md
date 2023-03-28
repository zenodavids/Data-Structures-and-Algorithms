# The Frequency count method

## Example 1 : sum up all the numbers in an array;

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

### The Time complexity would be;

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

## Example 2 : Find the sum of two matrix ;

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

### The Time complexity would be;

- **for(i = 0; i < n; i++)** is n + 1 unit of time
- **for(j = 0; j < n; j++)** is n x (n + 1) unit of time.
  > since this loop is nested inside the original loop, it is n unit of time. that is, it depends on the n time the parent loop runs multiplied by n + 1 (recall that all loops are automatically n + 1)
- **C[i][j] = A[i][j] + B[i][j]** is n x n unit of time.
  > this is so because it is inside a loop so it n unit of time is dependent of the loop. and the second n because it is housed in the child loop.

Hence, the time complexity is **f(n) = 2n^2 + 2n + 1** which is O(n^2)

### The Space complexity of the variables use in the algorithm would be;

- A - n^2
- B - n^2
- C - n^2
- i - 1
- j - 1
- n - 1

Hence, the Space complexity is **s(n) = 3n^2 + 3** which is O(n^2)

## Example 3 : Find the multiplication of two matrix ;

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

### The Time complexity would be;

- **for(i = 0; i < n; i++)** would be **n + 1** unit of time
  > by default all for loops are n + 1 unit of time
- **for(j = 0; j < n; j++)** would be **(n + 1)n** unit of time
  > n + 1 by default, and the second n since it is in a far loop, hence its unit of time is dependent on the for loop nesting it
- **C[i,j] = 0** is **n x n** unit of time
  > since it is inside a nested for loop.
- **for(k = 0; k < n; k++)** would be **(n + 1)n x n** unit of time
- **C[i, j] = C[i, j] + A[i, k] \* B[k, j]** would be **n x n x n** unit of time

Hence, the time complexity is **f(n) = 2n^3 + 3n^2 + 2n + 1** which is O(n^3)

### The Space complexity of the variables use in the algorithm would be;

- A - n^2
- B - n^2
- C - n^2
- i - 1
- j - 1
- k - 1
- n - 1

Hence, the Space complexity is **s(n) = 3n^2 + 4** which is O(n^2)
