/* This JS file allows the user to search for a beer in the Punk library. The API's documentation can be found here https://punkapi.com/documentation/v2 */

document.addEventListener('DOMContentLoaded', () => {
  const descriptionDisplay = document.querySelector('.beer-description')
  const titleDisplay = document.querySelector('.beer-title')
  const imgDisplay = document.querySelector('.beer-img')
  const abvDisplay = document.querySelector('.beer-abv')
  const searchInput = document.getElementById('search-input')

  // Uses a placeholder image in case image from API is null or empty
  function setPlaceholderImage (imgElement) {
    const placeholderImageUrl =
      window.location.origin + '/assets/images/placeholder_beer_image.png'
    imgElement.src = placeholderImageUrl
  }

  // Display the beer information on landing page from search results
  function displayBeerDetails (data) {
    const name = data[0].name
    const image_url = data[0].image_url
    const description = data[0].description
    const abv = data[0].abv

    descriptionDisplay.innerHTML = description
    titleDisplay.innerHTML = name
    abvDisplay.innerHTML = abv + '%'

    // Check if image_url is not null and not empty
    if (image_url && image_url.trim() !== '') {
      imgDisplay.src = image_url
    } else {
      setPlaceholderImage(imgDisplay)
    }
  }

  function getBeer (url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayBeerDetails(data)
      })
      .catch(error => {
        console.error('Error fetching beer data:', error)
        setPlaceholderImage(imgDisplay)
      })
  }

  // Search event listener which searches for a beer when user inputs in search bar
  searchInput.addEventListener('input', event => {
    const searchTerm = event.target.value.trim()
    const searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${encodeURIComponent(
      searchTerm
    )}`
    getBeer(searchUrl)
  })
})
