
const contactPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('p');
    pageContent.textContent = 'Please submit your details to get in touch!';
    pageContent.appendChild(title);

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const FullNameInput = document.createElement('input');
    FullNameInput.type = 'text';
    FullNameInput.placeholder = 'Enter full name';
    form.appendChild(FullNameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Enter Email Address';
    form.appendChild(emailInput);

    const phoneDetails = document.createElement('input');
    phoneDetails.type = 'text';
    phoneDetails.placeholder = 'Enter best contact number';
    form.appendChild(emailInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.placeholder = 'Submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);


};

export default contactPage;