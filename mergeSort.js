//cut the array in half over and over until we just have single units
//sort those units recursively and return sorted arrays up through the stack

const merge = (arr1, arr2) => {
    results = []
    while (arr1.length > 0 || arr2.length > 0){
        if(arr1[0] < arr2[0]){
            results.push(arr1[0])
            arr1.shift()
        }else if(arr1.length > 0 && arr2.length < 1){
            results.push(arr1[0])
            arr1.shift()
        }else if(arr2[0] <= arr1[0]){
            results.push(arr2[0])
            arr2.shift()
        }else {
            results.push(arr2[0])
            arr2.shift()
        }
    }
    return results
}


const sortArray = nums => {
    if(nums.length === 1 ) return nums

    //cut nums in half
    let leftHalf = nums.slice(0, Math.floor(nums.length / 2))
    let rightHalf = nums.slice(Math.floor(nums.length / 2), nums.length)
    //recursive sort
    leftHalf =  sortArray(leftHalf)
    rightHalf =  sortArray(rightHalf)

    return merge(leftHalf, rightHalf)

}

console.log(sortArray([5,1,1,2,0,0]))

// [5,2] [3,1]
// [5] [2] [3] [1]
