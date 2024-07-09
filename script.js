document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const modal = document.getElementById('myModal');
    const form = document.getElementById('form');
    const closeModalBtn = document.getElementById('cross');

    contactBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });


    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });


    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;


        if (name === '') {
            document.getElementById('nameValidation').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameValidation').style.display = 'none';
        }


        if (address === '') {
            document.getElementById('addressValidation').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('addressValidation').style.display = 'none';
        }


        const phoneRegex = /^\+94\d{9}$/;
        if (!phone.match(phoneRegex)) {
            document.getElementById('phoneValidation').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('phoneValidation').style.display = 'none';
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            document.getElementById('emailValidation').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailValidation').style.display = 'none';
        }


        if (message.length < 10) {
            document.getElementById('messageValidation').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('messageValidation').style.display = 'none';
        }

        if (isValid) {
            const contactData = {
                name: name,
                address: address,
                phone: phone,
                email: email,
                message: message
            };
            localStorage.setItem('contactData', JSON.stringify(contactData));

            alert('Form submitted successfully!');

            document.getElementById('name').value = "";
            document.getElementById('address').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";

            modal.style.display = 'none';
        }
    });
});
