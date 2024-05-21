document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form data
  var formData = new FormData(this);
  
  // Convert form data to JSON
  var jsonData = {};
  formData.forEach(function(value, key){
    jsonData[key] = value;
  });
  
  // Send data to API endpoint
  fetch('http://localhost:3000/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // Optionally, you can redirect the user to another page or show a success message
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors, such as displaying an error message to the user
  });
});