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

/*
Given a string s, find the length of the longest substring without repeating characters.
*/

/**
 * @param {string} s
 * @return {number}
 * "pwwkew" => "pwwkew"
 //I think we can loop through the string VIA array and add to a temp array until a duplicate exists and then reset the array while keeping track of maxSubstring amount
 */

 var lengthOfLongestSubstring = function(s) {
    
    let maxSub = 0, tempArray = []
    
    s = s.split("")

    for (let j = 0; j < s.length; j++) {
        let i = j
        while (tempArray.indexOf(s[i]) === -1 && i < s.length) {
            tempArray.push(s[i])
            i++
        }
        if (tempArray.length > maxSub) {maxSub = tempArray.length}
        tempArray = []
    }
    return maxSub
}

/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
*/

/*
 * @param {number[]} height
 * @return {number}
 * [1,8,6,2,5,4,8,3,7] => 49
 * Since we are given two different lengths to keep track of to check if they equal the largest area, the first thing I thought of doing was a for loop nested in another for loop to check all possible areas while keeping track of a max value
 * Was not efficient enough, plan 2: For loop and find the longest width, which will be to length-1, and then check any higher heights that are before longest, code is still in development
*/

var maxAreaAlpha = function(height) {
    let max = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = (j - i)
            let length = Math.min(height[i], height[j])
            if (width * length > max) {max = width * length}
        }
    }
    return max
}

/**
 * @param {number[]} height
 * @return {number}
 * [1,8,6,2,5,4,8,3,7] => 49
 * I did many revisions of this. I ended up making an array that includes all the highest numbers greater than the height of the last object. I then made a loop for each number in the given array that would first check to see if the longest area is greater than the current maxArea. Then it would check to see if the current height is larger than any previous heights and if it is, then we would check the array of maxHeights and see if the area using those is higher than the current maxArea. That array would also run until the index of those values was smaller than the current value.
 */

 var maxArea = function(height) {
    temp = 0
    let maxArray = []
    let maxIndex = []
    for(let j = height.length - 2; j > 0; j--) {
        if (height[j] > height[height.length - 1] && !maxArray.includes(height[j])) {
            maxArray.push(height[j])
            maxIndex.push(j)
        }
    }

    let currentMaxHeight = height[0]

    for (let i = 0; i < height.length - 1; i++) {
        if ((height.length - (i + 1)) * Math.min(height[i], height[height.length - 1]) > temp || temp === 0) {
            temp = ((height.length - (i + 1)) * Math.min(height[i], height[height.length - 1]))
        }

        if (height[i] > currentMaxHeight || i === 0) {
            if (height[i] > currentMaxHeight) {currentMaxHeight = height[i]}
            for(let j = 0; i < maxIndex[j]; j++) { //loop through all max values
                if((maxIndex[j] - i) * Math.min(maxArray[j], height[i]) > temp) {temp = (maxIndex[j] - i) * Math.min(maxArray[j], height[i])}
            }
        }
    }
    return temp
}

/**
 * @description
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @testcase ([0,1,2,2,3,0,4,2], 2) => 5, but it will also check the array to make sure it is [0,1,3,0,4]
 * @prototyping At first I was just going to use filter, but when the array is checked, it comes out with the wrong answer, could be user error, but I moved on. Ended up just looping push and shift to remove the items since I can keep the order of the items while not using any other data structures.
 */
 var removeElement = function(nums, val) {
    let max = nums.length
    for (let i = 0; i < max; i++) {
        if (nums[0] != val) {
            nums.push(nums.shift())
        }
        else {nums.shift()}
    }
    return nums.length
};

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * [2,4,5,6,7,8], 7 => 4
 * The first thing I thought of was to use a binary search method to check midpoints since the array was already sorted. There were some exceptions that I ran into like numbers that would be inserted first or last in the array. As well as numbers inserted at [1].
 */

 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle

    if (nums[0] > target) {return 0}
    if (nums[nums.length - 1] < target) {return nums.length}

    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            //If equal
            return middle;
        } else if (nums[middle] < target) {
            // Value is greater
            start = middle + 1;
            if (start > end) {return start}
        } else {
            // Value is less
            end = middle - 1;
        }
    }
    return middle
}

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 * [1,2,3] => [1,2,4]
 * The first thing I thought of was doing a if statement to see if I can just increment the last number and then use a while loop from the end to set all 9's to 0's and adjust the number in front
 */

 var plusOne = function(digits) {
    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1] += 1
    }
    else{
        let i = digits.length - 1
        while (digits[i] === 9 && i >= 0) {
            digits[i] = 0
            i--
        }
        if (digits[0] === 0) { // [9,9] to [1,0,0] and [9] to [1, 0]
            digits.unshift(1)
        }
        else {digits[i]++}
    }
    return digits
}

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 * @example 3 => 3 (1+1+1, 1+2, 2+1)
 * @Prototype - This is an example of the fibonacci sequence where n = n - 1 + n - 2 so I made code for that
 */

 var climbStairs = function(n) {
    let first = 0, second = 1, fib = 0

    let i = 0
    while (i <= n) {
        fib = first + second
        second = first
        first = fib
        i++
    }
    return fib
};

/*
    Return the the number in the non empty array that only shows up once
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @example [4,1,2,1,2] => 4
 * @Prototyping : Use an object and make a new key for each value in the array, increment the value for the object each time it shows up, and then return the key that only has the value of 1
 */

 var singleNumber = function(nums) {
    let table = {}
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] in table) { //if key exists, increment
            table[nums[i]]++
        }
        else { //else add key
            table[nums[i]] = 1
        }
    }

    return Object.keys(table).find(key => table[key] === 1)
}

//Problem is to merge two sorted arrays together

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @example merge([ 1, 2, 3, 10, 15, 20, 0, 0, 0 ], 6, [ 2, 12, 22], 3) , nums1 = [1, 2, 2, 3, 10, 12, 15, 20, 22]
 * @prototype I didn't like that there were empty spots in nums1 so I decided to just use a for loop to to insert all of nums2. Would be faster than filtering and then adding nums2. After that, I thought about using a merge sort, but thought the most efficient way would be to use the Array.sort() method. Otherwise I would just remove the 0's and use a nested for loop to insert nums2 into nums1.
 */

 var merge = function(nums1, m, nums2, n) {
    
    let j = 0
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[j]
        j++
    }
    nums1 = nums1.sort((a, b) => a - b)
}

/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/

/**
 * @param {number} x
 * @return {number}
 * @example 5 => 2
 * @Prototype I want to find the largest square that is < x and then subtract the value from x until x is 0 or less while adding together each largest square together to return. Could probably tweek it some to find larger squares faster since 2^31 is the largest number there could be.
 */

 var mySqrt = function(x) {
    let answer = 0
    while (x >= 0) {
        let temp = 1
        while (temp * temp < x) {temp++}
        answer += temp
        x -= temp * temp
    }
    return answer - 1
}

/**
 * Make an array that contains an array of each row of Pascal's triangle up until row numRows and return it.
 * 
 * @param {number} numRows
 * @return {number[][]}
 * @example (5) => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * @prototype I decided to just manually return the first two options and then make a loop to add i and i+1 starting from 0 after adding 1 before and then after doing so
 */

 var generate = function(numRows) {
    
    if (numRows === 1) {return [[1]]}
    if (numRows === 2) {return [[1], [1,1]]}
    
    let answerArray = [[1], [1, 1]]
    let array = [1, 1]
    while (answerArray.length != numRows) {
        let tempArray = [1]
        for(let i = 0; i < answerArray.length - 1; i++) {
            tempArray.push(answerArray[answerArray.length - 1][i] + answerArray[answerArray.length - 1][i + 1])       
        }
        tempArray.push(1)
        answerArray.push(tempArray)
    }
    return answerArray
}

/**
 * @description
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 * 
 * @param {number} rowIndex
 * @return {number[]}
 * @example 3 => [1, 3, 3, 1]
 * @prototype I decided to manually do the first two rows because I can use the first row to generate all of the other rows. To generate all of the other rows, I pushed 1 to it and then I looped through the previous row adding i and i+1 and pushing the result to the temp array. I then added 1 and set the new answerArray to the temp array and repeated until we reached the row we needed.
 */

 var getRow = function(rowIndex) {
    if (rowIndex === 0) {return [1]}
    if (rowIndex === 1) {return [1,1]}
    
    let answerArray = [1, 1]
    let row = 1
    while (row != rowIndex) {
        let tempArray = [1]
        for(let i = 0; i < answerArray.length - 1; i++) {
            tempArray.push(answerArray[i] + answerArray[i + 1])       
        }
        tempArray.push(1)
        answerArray = tempArray
        row++
    }
    return answerArray
}

/**
 * @description You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

The triangular sum of nums is the value of the only element present in nums after the following process terminates:

Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
Replace the array nums with newNums.
Repeat the entire process starting from step 1.
Return the triangular sum of nums.
 * 
 * @param {number[]} nums
 * @return {number}
 * @example [1,2,3,4,5] => 8
 * @prototype The description gave a lot of info, which I used for my prototype. I used a while loop since we have to keep making the the array smaller until one value was left and returned that value. I used a temp array to push all of the math I did with the numbers and then I set nums equal to that temp array.
 */

var triangularSum = function(nums) {
    while (nums.length != 1) {
        let tempArray = []
        for(let i = 0; i < nums.length - 1; i++) {
            tempArray.push((nums[i] + nums[i+1]) % 10)
        }
        nums = tempArray
    }
    return nums[0]
}

/**
 * @description
 * You are given a 0-indexed integer array nums whose length is a power of 2. Apply the following algorithm on nums:
 * Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
 * For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
 * For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
 * Replace the array nums with newNums.
 * Repeat the entire process starting from step 1.
 * Return the last number that remains in nums after applying the algorithm.
 * 
 * @param {number[]} nums
 * @return {number}
 * @example [1,3,5,2,4,8,2,2] => 1
 * @prototype Followed the directions of the game and made some minor adjustments with how they used the newNums array
 */

 var minMaxGame = function(nums) {
    
    while (nums.length != 1) {
        let newNums = []
        for (let i = 0; i < (nums.length / 2); i++) {
            if (i % 2 === 0) {
                newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
            }
            else {
                newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
            }
        }
        nums = newNums
    }
    return nums[0]
}

/**
 * @description You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:
 * Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
 * Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
 * Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
 * Given the integer n, return the last number that remains in arr.
 * 
 * @param {number} n
 * @return {number}
 * @example [1,2,3,4,5,6,7,8,9] => 6
 * @prototype So I noticed that it wants us to remove all indexes that are % 2 === 0 and then ! % 2 === 0. If you reverse the array the second time or after you filter, then you are removing items that are % 2 === 0 again. Just loop that until n.length === 1.
 * 
 * @examples The first two answers do not work in leetcode due to the large array it would create, but functions correctly. Working on the final version that does not include an array.
 */

 var lastRemaining = function(n) {
    if (n === 1) {return n}   
    let nArray = []

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {nArray.push(i)}
    }

    let flag = true

    while (nArray.length != 1) {

        if (flag) {
            nArray.pop()
            if (nArray.length === 1) {break}
            if (nArray.length % 2 === 0) {nArray = nArray.filter((value, index) => index % 2 != 0)}
            else {nArray = nArray.filter((value, index) => index % 2 === 0)}
            flag = false
        }
        else {
            nArray.shift()
            if (nArray.length === 1) {break}
            nArray = nArray.filter((value, index) => index % 2 === 0)
            flag = true
        }
    }

    return nArray[0]
}

var lastRemaining = function(n) {   
    let nArray = []

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {nArray.push(i)}
    }

    while (nArray.length != 1) {
        nArray = nArray.reverse()
        nArray = nArray.filter((value, index) => index % 2 != 0)
    }
    return nArray[0]
}

/**
 * @param {number} n
 * @return {number}
 * @example [1,2,3,4,5,6,7,8,9] => 6
 * @prototype After figuring out that leetcode basically will not let you use an array for this problem, I looked for a pattern. Some of my previous code taught me some info as well like the amount of remaining numbers being odd or even does make a difference only when popping off the right side and filtering. Look at my commented code for further info.
 */

 function lastRemaining(n) {
	//What we use to determine if we are on the left side or right side
	let pass = 1

	//First number on the left side that we keep track of to return
	let first = 1

    while (n > 1) {
        if (n % 2 === 1 || pass % 2 === 1) { //if next interation is odd or if we are starting on left side
            first += Math.pow(2, pass - 1) //each time you interate through it, the number between each items is 2 to some power
        }
        n = Math.floor(n / 2) //if we used an array and did it manually, this is the amount of numbers left in the array after each iteration
        pass++ //increment each iteration
    }
    return first
}

/**
 * @Description - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @Parameter - We are given two linked lists that are not empty and do not have leading 0s unless it is 0 itself
 * @Return - We return a linked list starting from the head
 * @Example - l1 = [2,4,3], l2 = [5,6,4] => [7,0,8]  (342 + 465 = 807)
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0 //Carries over number if > 9
    let answerTemp = new ListNode(-1)
    let answer = answerTemp //Represents the head of the list
  
    while (l1 || l2 || carry) {
      let l1Val = l1 ? l1.val : 0
      let l2Val = l2 ? l2.val : 0
  
      let nextVal = (l1Val + l2Val + carry) % 10
      carry = Math.floor((l1Val + l2Val + carry) / 10)
      answerTemp.next = new ListNode(nextVal)
      answerTemp = answerTemp.next
  
      l1 = l1 ? l1.next : null //These change the number from current to next val if it exists
      l2 = l2 ? l2.next : null
    }
      return answer.next
  }

  /**
   * @Description - The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR" and that's what you will return when given the a random string of characters and another number for the amount of rows.
   * @Parameters - We are given two parameters. One is a string of characters that will range from 1 to 1000 characters. The other is a number that will range 1 to 1000 as well. It does not state whether there may be more rows than characters, but that should not really affect the final result with how I do things.
   * @Return - We return a string following the rules above
   * @Example - ("PAYPALISHIRING", 4) => "PINALSIGYAHRPI"
   * @Pseudo - There were a couple of ways I could think of doing it. One is to make an array for each row and push the appropriate values into each and combine. The other is searching the array multiple times and grab the values for each row and then combining them all. First one has a high space complexity while the second has a high time complexity. I chose the first option because it was easy to implement and would be faster.
   */

  var convert = function(s, numRows) {
    let answer = []
    s = s.split("")
    for (let i = 0; i < numRows; i++) {
      answer[i] = [] //make a sub array for each row
    }

    let temp = 0 //What I manipulate and use to check what row we are on

    while (s.length != 0) {
      answer[temp].push(s.shift())
      if (temp + 1 === numRows) {
        for (let i = temp - 1; i > 0; i--) { //This is so we zig zag each row and we exclude the first and last value since the other loop handles those
          answer[i].push(s.shift())
        }
        temp = -1 //-1 because we increment right after and it would never touch answer[0] again otherwise
      }
      temp++
    }
    
    return answer.map(val => val.join("")).join("")
};

/**
 * @Description - Given a string, return the largest substring. If there is more than one substring that is of the largest length, return any of the substrings of the largest length will be fine
 * @Parameters - We are given a string that is of length 1 to 1000
 * @Return - We return a string that is a substring of the given string.
 * @Example - "abbacdc" => "abba", "YYYYY" => "YYYYY", "abcd" => "a" || "b" || "c" || "d"
 * @Pesuedo - The first function is basically a brute force method that checks for palindromes at each character without using precalculated inforamtion. The second function searches for strings of increasing length until the length is greater than the given string. The second function uses a matrix and only checks about half of the items in the matrix and it also only checks indexes if a string of the current length + starting index is <= the length of the string. One way I could improve all of these algorithms is actually just check for only one item of the length and if found, we skip to the next length since it doesn't matter which substring of the max length we return.
 */

var longestPalindrome = function(s) {
    s = s.split("")
    let answer = []
    for (let i = 0; i < s.length; i++) {
        if (s[i - 1] === s[i + 1]) { //if a(b)a
            let tempArr = []
            let indexInc = 1 //values away from i
            tempArr.push(s[i])
            while (s[i + indexInc] === s[i - indexInc]) {
                tempArr.push(s[i + indexInc])
                tempArr.unshift(s[i + indexInc])
                indexInc++
            }
            if (tempArr.length > answer.length) {answer = tempArr}
        }
        if (s[i] === s[i + 1]) { //if (a)a
            let tempArr = []
            let indexInc = 1 //values away from i
            tempArr.push(s[i])
            tempArr.push(s[i])
            while (s[i + indexInc + 1] === s[i - indexInc] && s[i - indexInc] != undefined) {
                tempArr.push(s[i - indexInc])
                tempArr.unshift(s[i - indexInc])
                indexInc++
            }
            if (tempArr.length > answer.length) {answer = tempArr}
        }
    }
    return answer.join("")
}

var longestPalindrome = function(s) {
    // get length of input string
    let n = s.length
  
    let table = new Array(n)
    for(let i = 0; i < n; i++) {table[i] = new Array(n)} //Make an empty table/matrix
  
    let maxLength = 1 //Keep track of length of string to return
    let start = 0 //Keep track of the start of the longest palindrome
    
    //Set length 1 items on table to true
    for (let i = 0; i < n; i++) {table[i][i] = true} //We only really care about checking items above to the top right of this since we would be duplicating checks otherwise
  
    //Check for length two substrings
    for (let i = 0; i < n - 1; i++) {
      if (s[i] == s[i + 1]) { //only half of the table is used. We could check the row as well, but we don't
        table[i][i + 1] = true
        start = i
        maxLength = 2
      }
    }
  
    // Check for lengths greater than 2.
    // k is length of substring so we start with 3 since everything with 2 is checked already. We check by length until the length of the substring would be greater than the actually length of the string.
    for (let k = 3; k <= n; k++) {
      
      // Fix the starting index
      for (let i = 0; i < n - k + 1; i++) {
                 
        // Get the ending index j of substring from starting index i and length k
        let j = i + k - 1
      
        // checking for sub-string from ith index to jth index if already planindrome (s.charAt(i+1) to s.charAt(j-1))
        if (table[i + 1][j - 1] && s[i] == s[j]) {
          table[i][j] = true
          
          if (k > maxLength) {
            start = i
            maxLength = k
          }
        
        }
      }
    }
    
    console.table(table)
    console.log(table)
  
    return s.substring(start, start + maxLength) //will return the first character if there is nothing longer than 1 character
  }

  /**
   * @Description - We are given an array and must return every matching pair of three numbers that sum to 0. The three numbers must be distinct as well
   * @Parameter - We are given an array of numbers. The array will have at least three numbers and up to 3000. The values of the numbers range from 10^-5 and 10^5
   * @Return - We return an array of nested array such that each nested array's sum === 0. Duplicates are not allowed. [-1 0 1] works, but cannot have [-1, 1, 0] as well. Order of the values in the array do not matter
   * @Example - [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
   * @Pseudo - The first function is a brute force I made of O(n^3) that uses a loop for each value to check. I could make that more efficent my sorting the array first and that would cut out some of my problems. The second function is O(n^2). I used a cache in both to make sure no duplicates will exist. The main efficiency with the second one is that I combine the first two loops together by making the second loop be i + 1 and the third loop starts at the end. Then you just increment or decrement depending on if the sum === 0. I am only able to make it this fast because I sorted the array first as well.
   */

  var threeSum = function(nums) {
    let answer = []
    let cache = {}
  
    for(let i = 0; i < nums.length; i++) {
      for(let j = 1; j < nums.length; j++) {
        for(let k = 2; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0 && i < j && i < k && j < k) {
            let tempArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
            if (tempArr in cache === false) {
              answer.push(tempArr)
              cache[tempArr] = true
            }
          }
        }
      }
    }
    return answer
  }

  var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let cache = {}
    let answer = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1
        let r = nums.length - 1
        
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0 && [nums[i], nums[l], nums[r]] in cache === false) {
                answer.push([nums[i], nums[l], nums[r]])
                cache[[nums[i], nums[l], nums[r]]] = true
                l++
            }
            else if (nums[i] + nums[l] + nums[r] < 0) {l++} //if less than 0, nothing to the left will ever be able to = 0 so we increase
            else {r--} //if too high, we lower right side until we get a match
        }
    }
    return answer
}

/**
 * @Description - We are given an array of numbers and must return true if there is a duplicate number or not.
 * @Parameter - We are given an array of numbers that will have at least one number in it and up to 10^5 numbers. The numbers range from +- 10^9.
 * @Return - We return true or false depending on if the array has a duplicate number in it.
 * @Example - [1, 2, 3, 4] => false, [1, 2, 3, 1] => true.
 * @Pseudo - I chose to use an object to store each number and I check each number as well to see if it is already in the obj.
 */

var containsDuplicate = function(nums) {
    let obj = {}
  
    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]]) {return true}
      
      obj[nums[i]] = true
    }
  
    return false
}