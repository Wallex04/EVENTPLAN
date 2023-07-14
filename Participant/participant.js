
RegisterBtn = document.getElementById('registerParticipant');
fetchBtn = document.getElementById('fetchParticipants');

function registerParticipant() {
  let form = document.getElementById('Organizer');
  let participantData = {};

  for (let i = 0; i < form.elements.length; i++) {
    let input = form.elements[i];
    if (input.type === 'submit') continue;
    participantData[input.name] = input.value;
  }

  // Sending participantData to the registration API
  fetch('http://192.168.62.209:8080/api/v1/eventplanner/auth/participant/register', {
    method: 'POST',
    body: JSON.stringify(participantData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Handle the registration response
      console.log('Registration Successful!', data);
      alert("You have successfully registered as a participant!");
      window.location = '../Notification/notification.html'
    })
    .catch(error => {
      // Handle errors
      console.error('Registration Failed!', error);
    });
}

// N.B JSON is a javascript object notation that is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

function fetchAllParticipants() {
  // Fetch all participants from the API
  fetch('http://192.168.62.209:8080/api/v1/eventplanner/auth/participant/participants')
    .then(response => response.json())
    .then(data => {
      // Handle the fetched participants
      console.log('Fetched Participants:', data);
    })
    .catch(error => {
      // Handle errors
      console.error('Failed to fetch participants!', error);
    });
}

RegisterBtn.addEventListener('click', function() {
  registerParticipant();
});

fetchBtn.addEventListener('click', function() {
  fetchAllParticipants();
});
