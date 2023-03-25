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

console.log(isPowerOfTwo())

const isThePowerOfTwo = (n) => {
  // since numbers below two cannot be PowerOfTwo numbers
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}

console.log(isThePowerOfTwo())
