var form = document.getElementById('resume-Form'); // Fix ID here
var resumeDisplay = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value; // Fix textarea type
    var experience = document.getElementById('experience').value; // Fix textarea type
    var skills = document.getElementById('skills').value; // Fix textarea type
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
