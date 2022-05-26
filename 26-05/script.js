const whois = prompt('Кто пришел?','Админ');

if(whois === 'Админ'){
    const password = prompt('Пароль?');

    if(password === 'Черный Властелин'){
        alert('Добро пожаловать');
    } else if(password === null){
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if(whois === null){
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}
