/******* 1 *******/
function Hello() {
    console.log('Привет, JavaScript!');
}

Hello();


/******* 3 *******/
function getName(name) {
    if (name === 'Василий'){
        alert('Привет, ' + name)
    } else {
        alert('Привет, гость')
    }
}

getName('Василий');

/******* 2 *******/
function Calculator(number) {
    alert(number ** 3);
}

Calculator(number = 2)
