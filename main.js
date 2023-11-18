document.addEventListener('DOMContentLoaded', (event) => {

    // Select the login link
    const loginLink = document.getElementById('loginLink');

    // Add click event listener
    loginLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor action
        document.addEventListener('DOMContentLoaded', (event) => {
            // Change the title
            document.title = "Login Form";
        
            // Update header buttons
            const loginButton = document.querySelector('.button-v2');
            loginButton.textContent = 'Sign Up';
            loginButton.setAttribute('onclick', "window.location.href='login.html';");
        
            const joinButton = document.querySelector('.button-v1');
            joinButton.textContent = 'Help';
            joinButton.setAttribute('onclick', "window.location.href='help.html';");
        
            // Update form title and description
            const formTitle = document.querySelector('.form-container h1');
            formTitle.textContent = 'Login';
            
            const formDescription = document.querySelector('.form-container p');
            formDescription.textContent = 'Enter your credentials to access your account.';
        
            // Remove unnecessary fields
            const fullNameField = document.querySelector('.form-field label[for="full-name"]').parentNode;
            fullNameField.remove();
        
            const confirmPasswordField = document.querySelector('.form-field label[for="confirm-password"]').parentNode;
            confirmPasswordField.remove();
        
            const termsCheckboxField = document.querySelector('.checkbox-field');
            termsCheckboxField.remove();
        
            // Change form button text
            const submitButton = document.querySelector('.signup-container button');
            submitButton.textContent = 'Login';
        
            // Update prompt text and link
            const loginPrompt = document.querySelector('.login-prompt');
            loginPrompt.innerHTML = 'Don\'t have an account? <a href="signup.html">Sign up</a>';
        
            // Update form labels
            document.querySelector('.form-field label[for="email"]').textContent = 'Email Address';
            document.querySelector('.form-field label[for="password"]').textContent = 'Password';
        
            // Optionally change form action URL
            // const formElement = document.querySelector('.form-container form');
            // formElement.action = '/path-to-login';
        });
        
});
    // Optionally, update form action to point to your login processing script
    // document.querySelector('.form-container form').action = '/login';
});

