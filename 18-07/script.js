const form = document.querySelector('#form');

form.addEventListener('submit', () => {
    const userSurnameElement = document.querySelector('#userSurname');
    const userNameElement = document.querySelector('#userName');
    const userSurname2Element = document.querySelector('#userSurname2');
    const userBirthDateElement = document.querySelector('#userBirthDate');
    const userAddressElement = document.querySelector('#userAddress');
    const userPassportElement = document.querySelector('#userPassport');
    const userINNElement = document.querySelector('#userINN');
    const userDateReceiveElement = document.querySelector('#userDateReceive');
    const userPhoneElement = document.querySelector('#userPhone');
    const userEmailElement = document.querySelector('#userEmail');
    const userBankElement = document.querySelector('#userBank');
    const userActualPlaceResidenceElement = document.querySelector('#userActualPlaceResidence');



    const userSurname = userSurnameElement.value;
    const userName = userNameElement.value;
    const userSurname2 = userSurname2Element.value;
    const userBirthDate = userBirthDateElement.value;
    const userAddress = userAddressElement.value;
    const userPassport = userPassportElement.value;
    const userINN = userINNElement.value;
    const userDateReceive = userDateReceiveElement.value;
    const userPhone = userPhoneElement.value;
    const userEmail = userEmailElement.value;
    const userBank = userBankElement.value;
    const userActualPlaceResidence = userActualPlaceResidenceElement.value;



    localStorage.setItem('userSurname', userSurname);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userSurname2', userSurname2);
    localStorage.setItem('userBirthDate', userBirthDate);
    localStorage.setItem('userAddress', userAddress);
    localStorage.setItem('userPassport', userPassport);
    localStorage.setItem('userINN', userINN);
    localStorage.setItem('userDateReceive', userDateReceive);
    localStorage.setItem('userPhone', userPhone);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userBank', userBank);
    localStorage.setItem('userActualPlaceResidence', userActualPlaceResidence);


    window.location.href = 'index2.html';
})



