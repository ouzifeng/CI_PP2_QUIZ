document
  .getElementById('resultForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: 'Your score: ' + score
      })
      .then(
        function () {
          console.log('SUCCESS!')
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
  })
