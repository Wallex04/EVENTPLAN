
  async function handleLoginForm(event) {
    event.preventDefault();
  
    // Using DOM manipulation to get users details
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // setting data to there respective values
    const formData = {
      username: username,
      password: password
    };
  
    try {
      // const response = await fetch('http://vitality.us-east-1.elasticbeanstalk.com/api/patient/signin', {
        const response = await fetch('http://192.168.62.209:8080/api/v1/eventplanner/auth/organizer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        // Redirect to another HTML page upon successful login
        alert('welcome to the best event planning website')
        // window.location.href = '../Events/event.html';
        window.location.href = '/index.html';
      } else {
        throw new Error('Login failed.');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleLoginForm);
  console.log(form)