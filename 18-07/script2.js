const form2 = document.querySelector('#form2');

form2.addEventListener('submit', () => {
    const OrganizationNameElement = document.querySelector('#organizationName');
    const jobTitleElement = document.querySelector('#jobTitle');
    const salaryElement = document.querySelector('#salary');
    const salaryOfPast3MonthElement = document.querySelector('#salaryOfPast3Month');
    const buyMobileElement = document.querySelector('#buyMobile');
    const priceElement = document.querySelector('#price');
    const amountElement = document.querySelector('#amount');
    const sumOfCreditElement = document.querySelector('#sumOfCredit');
    const typeOfCreditElement = document.querySelector('#typeOfCredit');
    const creditTermElement = document.querySelector('#creditTerm');
    const deliveryAddressElement = document.querySelector('#deliveryAddress');



    const creditInformation = {};

    creditInformation.organizationName = OrganizationNameElement.value;
    creditInformation.jobTitle = jobTitleElement.value;
    creditInformation.salary = salaryElement.value;
    creditInformation.salaryOfPast3Month = salaryOfPast3MonthElement.value;
    creditInformation.buyMobile = buyMobileElement.value;
    creditInformation.price = priceElement.value;
    creditInformation.amount = amountElement.value;
    creditInformation.sumOfCredit = sumOfCreditElement.value;
    creditInformation.typeOfCredit = typeOfCreditElement.value;
    creditInformation.creditTerm = creditTermElement.value;
    creditInformation.deliveryAddress = deliveryAddressElement.value;



    let userInformation = (localStorage);


    const generalInformation = {...creditInformation, ...userInformation};


    console.log(generalInformation);
})

