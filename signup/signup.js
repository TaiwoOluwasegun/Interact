const form = document.forms['form'];
const fullName = document.forms['form']['name'];
const passWord = document.forms['form']['passWord'];
const country = document.forms['form']['country'];
error_element = document.getElementById('error_element');

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener('submit', (e) => {
    let error_message = [];
    if(fullName.value == "" || fullName.value == null){
        error_message.push('name is required!');
        error_element.classList.add('error_message');
        fullName.focus();
        fullName.style.border = '1px solid red';
    }
    if(passWord.length <= 5){
        error_message.push('password must be greater than 5 characters!');
        error_element.classList.add('error_message');
        passWord.focus();
        passWord.style.border = '1px solid red';
    }
    if(passWord.value === 'password'){
        error_message.push('password cannot be password');
        error_element.classList.add('error_message');
        passWord.focus();
        passWord.style.border = '1px solid red';
    }
    if(country.value == "" || country.value == null){
        error_message.push('please select your country!');
        error_element.classList.add('error_message');
        country.focus();
        country.style.border = '1px solid red';
    }

    if (error_message.length > 0){
        e.preventDefault()
        error_element.innerText = error_message.join(' \n ')
    }
})




















// const verify_firstName = () => {
//     if((typeof(firstName.value) === 'string') && (firstName.value.length >= 3)) {
//         first_error.style.display="none";
//         firstName.style.border="none";
//         return true;
//     }else{
//         firstName.style.border="1px solid red";
//         first_error.style.display="block";
//         firstName.focus();
//         return false;
//     }
// }

// const verify_lastName = () => {
//     if((typeof(lastName) == 'string') && (lastName.value.length >= 3)) {
//         last_error.style.display="none";
//         lastName.style.border="none";
//         return true;
//     }
// }

// const verify_country = () => {
//     if(country.value !== "") {
//         country_error.style.display="none";
//         country.style.border="none";
//         return true;
//     }
// }

// const verify_email = () => {
//     if((email.value != "") && (email.value.match(mailformat))) {
//         email_error.style.display="none";
//         email.style.border="none"
//         return true;
//     }
// }

// const verify_password = () => {
//     if (passWord.value.length >= 5) {
//         pass_error.style.display="none";
//         passWord.style.border="none"
//         return true;
//     }
// }






//  const validate = () => {

//     firstName.addEventListener('textInput', verify_firstName);
//     lastName.addEventListener('textInput', verify_lastName);
//     country.addEventListener('textInput', verify_country);
//     email.addEventListener('textInput', verify_email);
//     passWord.addEventListener('textInput', verify_password);



//     //  if(firstName.value.length < 3) {
//     //     firstName.style.border="1px solid red";
//     //     first_error.style.display="block";
//     //     firstName.focus();
//     //     return false;
//     // }
//     // if(lastName.value.length < 3) {
//     //     lastName.style.border="1px solid red";
//     //     last_error.style.display="block";
//     //     lastName.focus();
//     //     return false;
//     // }
//     // if(country.value === "") {
//     //     country.style.border="1px solid red";
//     //     country_error.style.display="block";
//     //     country.focus();
//     //     return false;
//     // }
//     // if(inputText.value.match(!mailformat)) {
//     //     email.style.border="1px solid red";
//     //     email_error.style.display="block";
//     //     email.focus();
//     //     return false;
//     // }
//     // if(passWord.value.length < 5) {
//     //     passWord.style.border="1px solid red";
//     //     pass_error.style.display="block";
//     //     passWord.focus();
//     //     return false;
//     // }
//  };

