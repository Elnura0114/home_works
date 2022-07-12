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






const btn_info = document.querySelector('#info');
const btn_error = document.querySelector('#error');
const btn_success = document.querySelector('#success');
const showNotification = (options) => {
    let info = document.createElement('div');
    info.className = `notification`, options.style;
    info.innerText = options.html;
    document.body.append(info);
    setTimeout(() => {
        info.remove();
    }, 1500)
}

btn_info.addEventListener('click', () => {
    showNotification({
        html: 'Info notification',
        style: 'info-notification'
    });
})

btn_error.addEventListener('click', () => {
    showNotification({
        html: 'Error notification',
        style: 'error-notification'
    })
})

btn_success.addEventListener('click', () => {
    showNotification({
        html: 'Success notification',
        style: 'success-notification'
    })
})


