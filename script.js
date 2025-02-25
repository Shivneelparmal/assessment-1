/*
document.getElementById("contactForm").addEventListener("submit", function(event) { //It listens for when the user tries to submit the form with the id="contactForm".
    let name = document.getElementById("name").value.trim();// Gettimg input values name (from the input field with id="name")
    let email = document.getElementById("email").value.trim(); //emai, message
    let message = document.getElementById("message").value.trim();
    let errorBox = document.getElementById("message-box"); //clears previous error It clears any existing error messages in the message box
    errorBox.innerHTML = "";
 
    let errors = [];
 
    if (name === "") {               //checking the errors like if name field is empty so the error will name is empty
        errors.push("Name is required.");
    }
    if (email === "") {
        errors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) { //if it doesn’t contain @ and . than it shows invalid email
        errors.push("Invalid email format.");
    }
    if (message === "") {
        errors.push("Message is required."); // message field empty shows the error 
    }
 
    if (errors.length > 0) {
        event.preventDefault(); //if there are error it prevent form from submitting
        errorBox.innerHTML = "<div class='error'><ul>" + errors.map(e => `<li>${e}</li>`).join('') + "</ul></div>";
    }   //displays the error messages inside the message box div 
});
*/