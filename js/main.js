/**
 * @param {number} x
 * @return {boolean}
 * 121 => true, -123 => false
 * Make sure we return false when the number is < 0. Determine if even or odd and split the number up accordingly. Reverse the right side and see if it is equal to the left side.
 */

 var isPalindrome = function(x) {
    if (x < 0) {return false}
    
    x = x.toString()
    
    if (x.toString().length % 2 != 0) {
        let mid = Math.floor(x.length/2)
        let right = x.substring(mid + 1).split("").reverse()
        let left = x.substring(0, mid).split("")

        for(let i = 0; i < right.length; i++) {
            if (right[i] != left[i]) {return false}
        }
    
        return true
    }

    else {
        let mid = Math.floor(x.length/2)
        let right = x.substring(mid).split("").reverse()
        let left = x.substring(0, mid).split("")

        for(let i = 0; i < right.length; i++) {
            if (right[i] != left[i]) {return false}
        }
    
        return true
    }
}

/**
 * Convert Roman Numeral to Int
 * @param {string} s
 * @return {number}
 * "III" => 3
 * Easiest way to probably do it is to make a table of possible characters I would receive so I can use it to convert each character. After I convert, I would just remove it from the string and keep track of the number to return it.
 */
 var romanToInt = function(s) {
    let table = {CM:900, CD:400, XC:90, XL:40, IX:9, IV:4, M:1000, D:500, C:100, L:50, X:10, V:5, I:1}
    let number = 0, i = 0
  
    for (i in table) {
    while (s.includes(i)) {
      number += Number(table[i])
      let ind = s.indexOf(i)
      s = s.substring(0, ind) + s.substring(ind + i.length)
    }
  }

   return number
}

/**
 * Convert integer to Roman Numeral
 * @param {number} num
 * @return {string}
 * 3 => "III"
 * Make a table of each possible Roman Numeral attached to its' number equivelent. Loop each one from largest to smallest until it does not divide. Add loop each one from largest to smallest until the number is to small and then it will go to the next largest number. Each time you loop, add to a string that we will return.
 */
 var intToRoman = function(num) {
  
    let table = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
    let roman = ""
    let i = 0
    
     for ( i in table ) {
       while ( num >= table[i] ) {
         roman += i;
         num -= table[i]
       }
     }
     
     return roman
}

/**
 * @param {string[]} strs
 * @return {string}
 * ["flower","flow","flight"]
 * Note: we are returning the longest common string from the start of the string. The first thing I wanted to do was sort it so we loop through the smallest length string. I would then make a loop to add each letter to a string to compare
*/

var longestCommonPrefix = function(strs) {

    strs = strs.sort((a, b) => a.length - b.length, 0)

    string = strs[0].split("")

    let match = ""
    let temp = ""

    const compare = str => str.startsWith(temp)

        for (let i = 0; i < string.length; i++) {
            temp += string[i]
            if (strs.every(compare) && temp.length > match.length) {match = temp}
            else {break}
        }
    return match
}

/**
 * @param {string} s
 * @return {number}
 * "   fly me   to   the moon  " => 4
 * I'll split the function and then access the last value in the array. Ended up having to filter it as well because some of the given examples had spaces after the last word in the string
 */

var lengthOfLastWord = function(s) {
    s = s.split(" ").filter(value => value != "")
    return s[s.length-1].length
};

var lengthOfLastWord = s => s.split(" ").filter(value => value != "")[s.split(" ").filter(value => value != "").length-1].length

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
*/

/*
 * @param {number[]} nums
 * @return {number}
 * [1, 1, 2] => 2
 * I will loop each value in the array and if it is equal to the then I change the value, if not I increment a number. I will then sort the array and return the incremented number
 */

var removeDuplicates = function(nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {nums[i] = 101}
        else {k++}
    }
    nums = nums.sort((a, b) => a - b)
    return k
};

/*
Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * "mississippi", "issip" => 4
 * I want to loop haystack.length times to check if the begging part of the string matches and if not, we remove one character from the string, else we can return the amount of times we looped
 */

 var strStr = function(haystack, needle) {
    if (needle.length === 0) {return 0}

    let i = 0
    while (haystack.length >= needle.length) {
        if (haystack.startsWith(needle)) {
            return i
        }
        else {
            haystack = haystack.slice(1)
            i++
        }
    }
    return -1
}