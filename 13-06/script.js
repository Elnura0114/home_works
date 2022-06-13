function minNumber(a = 4, b = 10) {
    if(a > b){
        return b;
    } else{
        return a;
    }
}

let result = minNumber();
console.log(result);


const name = ('Вася');
function getSomething() {
    if (name === 'Вася'){
        alert('Привет, ' + name);
    } else {
        alert('Здравствуйте! Вы кто?');
    }
}

getSomething('Вася');


function together() {
    minNumber() + getSomething();
}

together();