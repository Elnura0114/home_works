
let q1 = prompt('Столица Кыргызстана?')
if(q1 === 'Бишкек'){
    a1 = 1;
} else {
    a1 = 0;
}

let q2 = prompt('Почтовый индекс столицы?')
if(q2 === '720000'){
    a2 = 1;
} else {
    a2 = 0;
}

let result = (+a1 + +a2);
alert(result);

