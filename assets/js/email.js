/*jshint esversion: 6 */

emailjs.init('-KnEtVWAz0V-IAlEz'); 

document
  .getElementById('resultForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Simple validation
    if (!name || !email) {
      alert('Name and email are required');
      return;
    }

 // Send quiz score to the user
  emailjs.send('service_7cwu2tw', 'template_cyk3kf9', {
      from_name: name,
      from_email: email,
      message: 'Your score: ' + score + '/14',
    })
      .then(
        function() {
          // After the email is sent, hide the form and show the "thanks" message
          document.getElementById('resultForm').style.display = 'none';
          document.getElementById('thanks').style.display = 'block';
        },
        function(error) {
          console.log('FAILED...', error);
        }
      );

  // Send feedback to the developer
  emailjs.send('service_7cwu2tw', 'template_0g212ac', {
      from_name: name,
      from_email: email,
      subject: 'Quiz Feedback',
      message: 'Feedback: ' + feedback,
    })
    .then(
      function() {
        // After both emails are sent, hide the form and show the "thanks" message
        document.getElementById('resultForm').style.display = 'none';
        document.getElementById('thanks').style.display = 'block';
      },
      function(error) {
        console.log('Developer feedback email failed...', error);
      }
    );    
  });
