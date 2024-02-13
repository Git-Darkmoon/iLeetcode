// Write a JavaScript program to find a specified number in an array.

const nums = [341, -5, 27, 9, 10, 62, 102, 1]

// const arrayOfNumbers = Array.from({ length: 100000 }, () =>
//   Math.floor(Math.random() * 1000)
// )

function findNumber(arr, numToFind) {
  let start = 0,
    end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === numToFind) return true
    else if (arr[mid] < numToFind) start = mid + 1
    else end = mid - 1
  }

  return false
}

console.log(findNumber(nums, 5))
