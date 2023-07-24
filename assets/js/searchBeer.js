/* This JS file allows the user to search for a beer in the Punk library. The API's documentation can be found here https://punkapi.com/documentation/v2 */

document.addEventListener('DOMContentLoaded', () => {
    
    const descriptionDisplay = document.querySelector(".beer-description")
    const titleDisplay = document.querySelector(".beer-title")
    const imgDisplay = document.querySelector(".beer-img")
    const abvDisplay = document.querySelector(".beer-abv")
    const searchInput = document.getElementById('search-input');

    function setPlaceholderImage(imgElement) {
        const placeholderImageUrl = window.location.origin + '/assets/images/placeholder_beer_image.png';
        imgElement.src = placeholderImageUrl;
    }    

});