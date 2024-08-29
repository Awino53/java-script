//Write a function `mergeArrays(arr1, arr2)` that takes two arrays `arr1` and `arr2` and merges them into a single array, with the elements sorted in ascending order.
//The function should return the merged array.
function mergeArrays(aar1,arr2){
    //First, we need to combine the two arrays into one. We can use the concat()
    //method to do this.
    let mergedArray = aar1.concat(arr2);
    //Next, we need to sort the merged array in ascending order. We can use the sort.
    //method to do this. The sort method sorts the elements of an array in place and returns.
    //The default sort order is according to string Unicode code points. Therefore, the default sort order.
    //is the same as sorting according to string values, ignoring case for strings and ignoring type.
    mergedArray.sort((a, b) => a - b);
    //Finally, we return the merged array.
    return mergedArray;
}
     


     

