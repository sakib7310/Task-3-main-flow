document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.style.display = 'none');

        // Validate form inputs
        let isValid = true;

        const name = document.getElementById('name').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const email = document.getElementById('email').value;
       

        // Validate name
        if (name.trim() === '') {
            isValid = false;
            document.getElementById('nameError').textContent = 'Name is required.';
            document.getElementById('nameError').style.display = 'block';
        }

        // Validate phonenumber
        if (phonenumber.length < 10) {
            isValid = false;
            document.getElementById('phonenumberError').textContent = 'Phonenumber must be 10 characters .';
            document.getElementById('phonenumberError').style.display = 'block';
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById('emailError').textContent = 'Invalid email format.';
            document.getElementById('emailError').style.display = 'block';
        }

        // If all inputs are valid, submit the form (you can handle the form data here)
        if (isValid) {
            alert('Form submitted successfully!');
            // Handle form submission here (e.g., send data to a server)
            // form.submit(); // Uncomment this line to submit the form
        }
    });
});

function toggleMenu() {
  document.getElementById('myDropdown').classList.toggle('show');
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    Array.from(dropdowns).forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};
