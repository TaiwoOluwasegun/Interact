const email = document.querySelector('[name="Email"]');
const password = document.querySelector('[name="password"]');
const submitBtn = document.querySelector('.sign-in-color');

// test object of users details
const testObj = [{
        name: 'Vinyl',
        email: 'vinate@gmail.com',
        password: 'vintage'
    },
    {
        name: 'Zhor',
        email: 'zhor3@gmail.com',
        password: 'papi-zhor'
    }
];

// checks their inputs if it matches the testObj record
function handleClicks() {
    let userEmail = email.value;
    let userPassword = password.value;
    let testArr;

    for (let i = 0; i < testObj.length; i++) {
        if (Object.values(testObj[i]).includes(userEmail)) {
            testArr = testObj[i];
            if (testArr.password === userPassword) {
                alert(`Welcome ${testArr.name}`)
            } else {
                alert('Incorrect Passoword');
            }
        }
    }
    if (!testArr) {
        alert('Check Email/Sign up');
    }

}
submitBtn.addEventListener('click', handleClicks)