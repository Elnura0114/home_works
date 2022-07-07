/*
const red_2 = document.querySelector('#red_color');
const blue_2 = document.querySelector('#blue_color');
const purple_2 = document.querySelector('#purple_color');
const container_2 = document.querySelector('#color_container');

red_2.addEventListener('click', () => {
    container_2.classList.toggle('background-red');
})

blue_2.addEventListener('click', () => {
    container_2.classList.toggle('background-blue');
})

purple_2.addEventListener('click', () => {
    container_2.classList.toggle('background-purple');
})*/






const btn_2 = document.querySelector('#btn');
const showNotification = (options) => {
    let info = document.createElement('div');
    info.className = 'notification';
    info.innerText = options.html;
    document.body.append(info);
    setTimeout(() => {
        info.remove();
    }, 1500)
}

btn_2.addEventListener('click', () => {
    showNotification({
        html: 'HELLO',
    });
})


