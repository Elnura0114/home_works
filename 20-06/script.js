/*************** 1 ****************/

let result = 1;
let number = [2, 3, 4, 5, 6, 7];
for (let i = 0; i < number.length; i++) {
    result *= number[i]
}
let box = {
    result2: result
}
console.log(box.result2);







/*************** 2 ****************/

const num = [1, 2, 3];
let numBack = array => {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(numBack(num));

