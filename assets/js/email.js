emailjs.init('-KnEtVWAz0V-IAlEz'); 

document
  .getElementById('resultForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (!name || !email) {
      alert('Name and email are required');
      return;
    }

    // You could add more complex validation here, such as checking if the email address is in the correct format

    emailjs
      .send('service_7cwu2tw', 'template_cyk3kf9', {
        from_name: name,
        from_email: email,
        message: 'Your score: ' + score,
      })
      .then(
        function() {
          // After the email is sent, hide the form and show the "thanks" message
          document.getElementById('resultForm').style.display = 'none';
          document.getElementById('thanks').style.display = 'block';
          console.log('SUCCESS!');
        },
        function(error) {
          console.log('FAILED...', error);
        }
      );
  });
