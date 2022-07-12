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
