
// Function to fetch API and validate form submission
async function register() {
    // Get the form values
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // Check if all input fields are empty
    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Create a data object with the form values
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };
  
    try {
      // Send the data to the backend API endpoint
      const response = await fetch('http://vitality.us-east-1.elasticbeanstalk.com/api/patient/signup', {
        // const response = await fetch('http://192.168.62.209:8080/api/v1/eventplanner/auth/organizer/organizer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
        window.location.href = '../Login/login.html';
      } else {
        // Error during registration
        alert('Error during registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  
  // Attach event listener to the form submission
  const form = document.getElementById('register');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    register(); // Call the register function
  });
  