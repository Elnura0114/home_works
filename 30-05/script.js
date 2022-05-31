
let q1 = prompt('Столица Кыргызстана?');
let point = 0;
if(q1 === 'Бишкек'){
    point++;
}

let q2 = prompt('Почтовый индекс столицы?');
if(q2 === '720000'){
    point++;
}

alert(point);

