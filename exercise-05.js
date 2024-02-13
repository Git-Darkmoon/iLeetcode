/*
Write a JavaScript function to check if a given
 string is a palindrome (reads the same forwards and backwards).

 test cases:
"1 eye for of 1 eye" -> false
"A man, a plan, a canal. Panama" -> true
"never odd or even" -> true
"not  a palindrome" -> false

 */

const isPalindrome = (txt) => {
  const regex = /(^A-Za-z0-9)/g
  const newTxt = txt.replace(regex, "")

  return txt === newTxt
}

console.log(isPalindrome("A man, a plan, a canal. Panama"))
