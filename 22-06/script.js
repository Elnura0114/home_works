/************ 1 *************/
const numbers = [1, 2, 23, 5, 45,];

const result = numbers.reduce((sum, item) => {
    return sum + item;
}, 0.);

console.log(result);

/*1) sum = 1;
2) sum(1) + item(2);
3) sum(3) + item(23);
4) sum(26) + item(5);
5) sum(31) + item(45);
6) sum(76) + item();
7) sum = 76;*/


/************ 2 *************/
/*
Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
произведение этих аргументов.
*/

let mul = (n, m) => {
    return n + m;
}

let result = mul(58, 89);
console.log(result);





/************ 3 *************/
/*
Создайте функцию и с помощью цикла найдите факториал числа 7:
Название для функции можно дать любую.
    Например при вызове функции factorial с параметром 7 в консоли должно
вывести следующее:
*/


function factorial(n) {
    var num = 1;
    while (n)
        num *= n--;
        return num;
}
console.log(factorial(7));










