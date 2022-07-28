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

