document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".flipcard-front form");
    const signupForm = document.querySelector(".flipcard-back form");

    // Prevent default action for login button
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Call function to make POST request for login verification
        loginUser(loginForm);
    });

    // Prevent default action for signup button
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Call function to make POST request for signup verification
        signupUser(signupForm);
    });

    function loginUser(form) {
        // Extract email and password from the form
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;

        // Make POST request to API for login verification
        fetch('your_login_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(response => {
            if (response.ok) {
                // Redirect to next app page upon successful login
                window.location.href = "next_app_page.html";
            } else {
                // Handle login error
                alert("Login failed. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function signupUser(form) {
        // Extract email, name, and password from the form
        const email = form.querySelector('#signup-email').value;
        const name = form.querySelector('#signup-name').value;
        const password = form.querySelector('#signup-password').value;

        // Make POST request to API for signup verification
        fetch('your_signup_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            }),
        })
        .then(response => {
            if (response.ok) {
                // Redirect to successful signup page upon successful signup
                window.location.href = "successfulsignup.html";
            } else {
                // Handle signup error
                alert("Signup failed. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
