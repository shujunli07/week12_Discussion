function challenge3() {
    // Get the value of the selected radio buttons
    const standing = document.querySelector('input[name="standing"]:checked');
    const gradDate = document.querySelector('input[name="gradDate"]:checked');
    
    // Check if both radio buttons are selected
    if (!standing || !gradDate) {
        alert("Please select both your current class standing and your anticipated graduation date before proceeding.");
        return false; // Prevent form submission
    }
    
    // If both selections are made, allow the form to submit
    return true;
}

// Attach the validation function to the form's submit event
document.getElementById("ch3form").onsubmit = challenge3;