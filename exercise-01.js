/* How many times does an element repeats itself ?
show the answer as:

result = {
    "jane":2,
    "paul":1
    "john":4
}

sample array: ['a', 'b', 'c', 'd','a', 'c', 'd', 'a', 'b'],

*/

const sampleArray = ["a", "b", "c", "d", "a", "c", "d", "a", "b"]

const result = {}

sampleArray.forEach((letter) => {
  if (result[letter]) {
    result[letter]++
  } else {
    result[letter] = 1
  }
})

console.log(result)
