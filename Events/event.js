// Function to fetch API and register organizer
async function registerEvent() {
    // Get the form values through DOM Manipulation
    const eventName = document.querySelector('input[name="event name"]').value;
    const description = document.querySelector('input[name="Description"]').value;
    const organizerId = document.querySelector('input[name="Organizer"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const eventDateDD = document.querySelector('input[name="eventDate"]:nth-of-type(1)').value;
    const eventDateMM = document.querySelector('input[name="eventDate"]:nth-of-type(2)').value;
    const eventDateYYYY = document.querySelector('input[name="eventDate"]:nth-of-type(3)').value;
    const additionalInfo = document.querySelector('input[name="additionalInfo"]').value;
  
    // Create a data object with the form values
    const data = {
      eventName,
      description,
      organizerId,
      address,
      eventDate: `${eventDateYYYY}-${eventDateMM}-${eventDateDD}`,
      additionalInfo,
    };
  
    try {
      const response = await fetch('http://192.168.62.209:8080/api/v1/eventplanner/auth/events/event', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Organizer registered successfully!');
        window.location = '../Participant/participant.html'
      } else {
        // Error registering organizer
        alert('Error registering organizer.');
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
    registerEvent(); // Call the registerEvent function
  });
  