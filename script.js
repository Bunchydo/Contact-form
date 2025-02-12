let submitButtonID = document.getElementById("submitButtonID");
let messageSentBoxID = document.getElementById("messageSentBoxID");

// Getting IDs for input values
let firstnameID = document.getElementById("firstnameID");
let lastnameID = document.getElementById("lastnameID");
let emailaddressID = document.getElementById("emailaddressID");
let generalEnquiryID = document.getElementById("generalEnquiryID");
let supportRequestID = document.getElementById("supportRequestID");
let messageTextID = document.getElementById("messageTextID");
let consentCheckBoxID = document.getElementById("consentCheckBoxID");

let errorMessages = document.querySelectorAll(".error-message");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Submitting Form
submitButtonID.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission for validation

    // Hide all error messages initially
    errorMessages.forEach(error => error.style.display = "none");

    let hasError = false; // Initialize error tracking

    // Mapping input fields to corresponding error messages
    const fields = [
        { input: firstnameID, error: errorMessages[0] },
        { input: lastnameID, error: errorMessages[1] },
        { input: messageTextID, error: errorMessages[4] } // Corrected index
    ];

    // Validate text inputs
    fields.forEach(field => {
        if (field.input.value.trim() === "") {
            field.error.style.display = "block"; 
            hasError = true; // Track if there's an error
        }
    });
    
    if (emailaddressID.value.trim() === "") {
        errorMessages[2].style.display = "block";
        hasError = true;
    } else if (!isValidEmail(emailaddressID.value.trim())) {
        errorMessages[2].textContent = "Please enter a valid email address"; // Invalid email format
        errorMessages[2].style.display = "block";
        hasError = true;
    }
    // Validate radio buttons (ensure at least one is checked)
    if (!generalEnquiryID.checked && !supportRequestID.checked) {
        errorMessages[3].style.display = "block"; // Correct index for radio button error
        hasError = true;
    }

    // Validate consent checkbox
    if (!consentCheckBoxID.checked) {
        errorMessages[5].style.display = "block"; // Correct index for consent error
        hasError = true;
    }

    // Show success message if no errors
    if (!hasError) {
        messageSentBoxID.style.display = "block";
    } else {
        messageSentBoxID.style.display = "none";
    }
});
