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