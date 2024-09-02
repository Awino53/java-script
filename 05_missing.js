//Write a function `findMissingNumber(nums)` that takes an array of numbers `nums` containing unique integers from 1 to n (inclusive) and returns the missing number in the sequence.[1,2,3,5,6,7,8]
//declare a fuction findMissingNumber(nums)
//parameter = numbers
function findMissingNumber(nums) {
    //calculate the sum of the sequence using the formula n*(n+1)/2
    let n = nums.length + 1;//includin the last element
    console.log(n);
    
    let totalSum = n * (n + 1) / 2;//general value calculated
    console.log(totalSum)
    let actualSum=0

    
    //calculate the actual array
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    return totalSum-actualSum
}
console.log(findMissingNumber([1,2,4,5,6,8,9,11]) );





