// Function to fetch APIs, save participant data, and send notifications
async function sendNotification() {
    // Get the form values
    const eventName = document.querySelector('input[name="event name"]').value;
    const title = document.querySelector('input[name="Title"]').value;
    const eventId = document.querySelector('input[name="Event Id"]').value;
    const mailBody = document.querySelector('input[name="mail body"]').value;
    const eventDateDD = document.querySelector('input[name="eventDate"]:nth-of-type(1)').value;
    const eventDateMM = document.querySelector('input[name="eventDate"]:nth-of-type(2)').value;
    const eventDateYYYY = document.querySelector('input[name="eventDate"]:nth-of-type(3)').value;
    const eventTime = document.querySelector('input[type="time"]').value;
  
    // Create a data object with the form values
    const data = {
      eventName,
      title,
      eventId,
      mailBody,
      eventDate: `${eventDateYYYY}-${eventDateMM}-${eventDateDD}`,
      eventTime,
    };
  
    try {
      // Send the data to the backend API endpoint
      const response = await fetch('http://192.168.62.209:8080/api/v1/eventplanner/auth/notification/notify/We14333', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Notification sent successfully
        alert('Notification sent successfully!');
        window.Location = '/index.html'
      } else {
        // Error sending notification
        alert('Error sending notification.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  
  // Attach event listener to the submit button
  const form = document.getElementById('register');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    sendNotification(); // Call the sendNotification function
  });
  