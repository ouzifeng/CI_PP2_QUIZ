emailjs.init('-KnEtVWAz0V-IAlEz') // Initialize EmailJS with your user ID

document
  .getElementById('resultForm')
  .addEventListener('submit', function (event) {
    console.log('Form submitted') // Add this line
    event.preventDefault()
  })

emailjs
  .send('service_7cwu2tw', 'template_cyk3kf9', {
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
