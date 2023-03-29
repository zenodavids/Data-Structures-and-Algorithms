When getting the time complexity for if and else statements, it depends on what to look out for.\
But using the example below;

```js
Algorithm Test(n){
    if(n < 5){
        return 0;
    } else{
        for(i=0; i < n; i++){
            code//
        }
    }
}
```

- In the above **if** statement, the **time complexity will constant (O(1))**, which is 1 because it will always be a definite answer as long as it meets the condition.

- In the **else** statement, the time complexity will be "n" because the **for** loop will run **"n" times**.

> In the best case, the time complexity is constant, that is f(n) = O(1). This is because it involves the **if statement**
> but in the worst Case, the time complexity is linear (n), that is f(n) = O(n). This is because it involves the **for loop** in the **else statement**
