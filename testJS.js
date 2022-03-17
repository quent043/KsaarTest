// function “closestToZero” described by the following specifications:
//
//     given an array of positive and negative integers, it returns the closest number to zero
//
// if the closest number in input could be either negative or positive, the function returns the positive one
//
// if the input array is undefined or empty, the function returns 0

function closestToZero(input) {
    if (!input || input.length === 0) return 0;
    let result = input[0];
    const negativeNumbers = [];

    for (let item of input) {
        if (item < 0) negativeNumbers.push(item)
        else if (item < result) result = item;
    }

    if (negativeNumbers.length === 0) return result;

    const absoluteValueArray = negativeNumbers.map(Math.abs);
    absoluteValueArray.forEach(value => {
        if (value < Math.abs(result)) result = -value;
    })
    return result;
}


let input = [5, 30, 5, -4, -3, -2, -9]; // -2
let input2 = [4, 30, 5, 8, 6, -2, -9]; // -2
let input3 = [5, 30, 5, 8, 2, -2, -9]; // 2
let input4 = [4, 30, 5, 8, 1, -5, -9]; // 1
let input5 = []; //0
let input6 = undefined; //0
console.log(closestToZero(input));
console.log(closestToZero(input2));
console.log(closestToZero(input3));
console.log(closestToZero(input4));
console.log(closestToZero(input5));
console.log(closestToZero(input6));