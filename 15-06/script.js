/*************** 1 ***************/

const fillArr = [];
for(let i = 0; i < 10; i++){
    let result = 'x';
    fillArr.push(result);
}

console.log(fillArr);





/*************** 2 ***************/

const box = [1, 2, 115, 4, 58, 5 ,7 ,99];
for (let box2 of box) {
    if (box2 === 4){
        console.log('ЕСТЬ!!!');
    } else {
        console.log('Нет такого');
    }
}

