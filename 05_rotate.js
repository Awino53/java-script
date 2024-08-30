//Write a function `rotateArray(arr, k)` that rotates an array `arr` by `k` positions to the right. For example, if `arr = [1, 2, 3, 4, 5]` and `k = 2`, the output should be `[4, 5, 1, 2, 3]`.
/*check if number is k within the array and if not return the default array
original array =1,2,3,4,5
k=1(5,1,2,3,4)
k=2(4,5,1,2,3)
k=3(5,4,3,1,2)
k=4(5,4,3,2,1)

//slicing the element at the begining of the array
//slicing the element at the end of the array with the length prop //specify to go to the index 0
//concatenating the sliced elements(join them togeather)
*/
function rotateArray(arr, k) {
    k=k%arr.length;
    if(k===0){return arr}

    //rotating the array by slicing the last element and also slicing the first element

    let firstSlicedElement=arr.slice(-k)
    let slicedArrayTwo=arr.slice(0,arr.length-1)
    let rotatedArray=firstSlicedElement.concat(slicedArrayTwo)


    return firstSlicedElement.concat(slicedArrayTwo)
     
}
// Test the function
let arrayNew=[1,2,3,4,5,6,7,8,9]
console.log(rotateArray(arrayNew, 3)) // Output: [8, 9,
console.log(rotateArray(arrayNew, 9))