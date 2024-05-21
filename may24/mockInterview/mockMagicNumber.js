// From a unsorted array, check whether there are any two numbers that will sum up to a given number. For example, if the given number is 12, are there a combination of numbers (3,9), (5,7), (10, 2), etc that will add to 12. Print the two numbers that add to the given number. 

randNumbers = [3, 9, 6, 2, 8, 10, 1, 7, 4, 5]

// function magicNumber(magic) {
//     for (let i = 0; i < randNumbers.length; i++) {
//         if(randNumbers[i] + randNumbers[i + 1] == magic) {
//             console.log(randNumbers[i] + " + " + randNumbers[i + 1] + " = " + magic)
//         }
//     }
// }

// magicNumber(8);

// attempt 2
function magicNumber(magic) {
    let base = 0;
    for (let i = 0; i < randNumbers.length; i++) {
        if(randNumbers[base] + randNumbers[i + 1] == magic) {
            console.log(randNumbers[base] + " + " + randNumbers[i + 1] + " = " + magic);
        } 
        base++;
        console.log(base);
    }
}

magicNumber(8);


// zach's code
// function findTargetPair(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let num1=arr[i];
//         for (let j = i+1; j < arr.length; j++) {
//             let num2 = arr[j];
//             if(num1 + num2 === target) {
//                 console.log('Pair found: (' + num1 +', ' + num2 + ')');
//                 return
//             }
            
//         }
        
//     }
//     console.log('No pair found')
// }

// findTargetPair([6,3,8,4,9,10,2], 12);