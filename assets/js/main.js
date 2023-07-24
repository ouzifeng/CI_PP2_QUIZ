// This JS file is for general JS functionality

document.addEventListener('DOMContentLoaded', () => {
  const feelingBeer = ['HAPPY', 'JOYFUL', 'PLAYFUL']
  const beerSpan = document.querySelector('.feeling')
  let index = 0
  let charIndex = 0

  function typeWord () {
    if (charIndex < feelingBeer[index].length) {
      beerSpan.innerHTML += feelingBeer[index][charIndex]
      charIndex++
      setTimeout(typeWord, 200) // Type next character after a delay
    } else {
      // After typing out the current word, prepare to type the next word
      setTimeout(nextWord, 2000) // Change the word every 2 seconds
    }
  }

  function nextWord () {
    index = (index + 1) % feelingBeer.length // Loop back to the start of the array
    charIndex = 0
    beerSpan.innerHTML = ''
    typeWord()
  }

  typeWord()
})
