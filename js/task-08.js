const   form = document.querySelector('.login-form');
const  email = document.querySelector('[type="email"]');
const  password = document.querySelector('[type="password"]');
const button = document.querySelector('[type="submit"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const alterText = email.value && password.value;
         if (alterText.length <= 0) {
        return alert("Всі поля повинні бути заповнені!");
    };

    const userEmail = event.currentTarget.elements.email.value;
    const userPass = event.currentTarget.elements.password.value;
    const userData = {
        userEmail,
        userPass,
    };
    console.log(userData);

    form.reset(event);
    
};

