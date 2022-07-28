const form = document.querySelector('#form');

form.addEventListener('submit', () => {
    const userSurnameElement = document.querySelector('#userSurname');
    const userNameElement = document.querySelector('#userName');
    const userSecondNameElement = document.querySelector('#userSecondName');
    const userBirthDateElement = document.querySelector('#userBirthDate');
    const userAddressElement = document.querySelector('#userAddress');
    const userPassportElement = document.querySelector('#userPassport');
    const userINNElement = document.querySelector('#userINN');
    const userDateReceiveElement = document.querySelector('#userDateReceive');
    const userPhoneElement = document.querySelector('#userPhone');
    const userEmailElement = document.querySelector('#userEmail');
    const userBankElement = document.querySelector('#userBank');
    const userActualPlaceResidenceElement = document.querySelector('#userActualPlaceResidence');

    const elements = document.querySelectorAll('#form input, #form select, #form textarea');

    /*const createErrorMessage = () => {
        let notification = document.createElement('p');
        notification.innerText = 'Обязательное поле';
        notification.classList.add('notice');
    }*/

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('data-required')) {
            if (elements[i].value === '') {
                elements[i].classList.add('required');
                let notification = document.createElement('p');
                notification.innerText = 'Обязательное поле';
                notification.classList.add('notice');
                elements[i].after(notification);
            }
        }
        if (elements[i].hasAttribute('data-required')){
            if (elements[i].value !== ''){
                elements[i].classList.remove('required');
                delete window['notification'];
            }
        }

        elements[i].addEventListener('change', () => {
            elements[i].classList.remove('required');
            delete window['notification'];
        });
    }

        localStorage.setItem('userSurname', userSurnameElement.value);
        localStorage.setItem('userName', userNameElement.value);
        localStorage.setItem('userSecondName', userSecondNameElement.value);
        localStorage.setItem('userBirthDate', userBirthDateElement.value);
        localStorage.setItem('userAddress', userAddressElement.value);
        localStorage.setItem('userPassport', userPassportElement.value);
        localStorage.setItem('userINN', userINNElement.value);
        localStorage.setItem('userDateReceive', userDateReceiveElement.value);
        localStorage.setItem('userPhone', userPhoneElement.value);
        localStorage.setItem('userEmail', userEmailElement.value);
        localStorage.setItem('userBank', userBankElement.value);
        localStorage.setItem('userActualPlaceResidence', userActualPlaceResidenceElement.value);

        if (userSurnameElement.value && userNameElement.value && userSecondNameElement.value !== '') {
            window.location.href = 'index2.html';
        } else {
            localStorage.clear();
        }
    })



