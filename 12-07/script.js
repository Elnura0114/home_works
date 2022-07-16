const btn_info = document.querySelector('#info');
const btn_error = document.querySelector('#error');
const btn_success = document.querySelector('#success');
const showNotification = (options) => {
    let info = document.createElement('div');
    info.className = `notification` + options.style;
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







const btn_image = document.querySelector('#image');
const showSmile = (options) => {
    let smile = document.createElement('div');
    smile.innerText = options.html;
    smile.className = options.style;
    document.body.append(smile);
}

btn_image.addEventListener('click', () => {
    showSmile({
        html: `Здравствуйте,  ` + prompt('Как Вас зовут?') + `!`,
        style: 'smile',
    })
    let newImage = document.getElementById('image');
    newImage.src = "./img/free-icon-happy-743211.png";
})











let startBtn = document.getElementById('start_btn');
let stopBtn = document.getElementById('stop_btn');
let showTime = document.getElementById('show_time');

startBtn.addEventListener('click', beginCounter);
stopBtn.addEventListener('click', stopCounter);

let sec = 0;
let interval;

function beginCounter() {
    interval = setInterval(count, 1000);

    function count(){
        sec++;
        showTime.innerHTML = sec;
    }
}

function stopCounter() {
    clearInterval(interval);
}
