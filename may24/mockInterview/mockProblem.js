// Remove duplicate members from any array provided. Solution must successfully remove duplicates from any array provided. Print the resulting array with the removed values to the screen.

const array1 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 10, 5];
const array2 = [10, 20, 30, 40, 20, 50, 60, 70, 30, 80, 90, 100, 40];
const array3 = [5, 15, 25, 35, 45, 55, 15, 65, 75, 25, 85, 95, 35];

// // iterate through the array with a for loop
// for (let i = 0; i < array1.length; i++) {
    
//     console.log(array1[i]);
//     // array1.splice(5,1);
// }
// console.log(array1);

// letArr = [];

function noDup(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        } 
    } 
    console.log(newArr)
}

noDup(array2)