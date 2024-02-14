// Write a JavaScript function that takes an array of
// numbers and returns a new array with only the even numbers.

const numbers = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 100)
)

const evenNumbers = numbers.filter((n) => {
  return n % 2 === 0
})

console.log(evenNumbers)
