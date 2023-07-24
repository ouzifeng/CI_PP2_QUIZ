document.addEventListener('DOMContentLoaded', () => {
    const randomMyBeer = document.querySelector(".random-beer");
    const descriptionDisplay = document.querySelector(".beer-description");
    const titleDisplay = document.querySelector(".beer-title");
    const imgDisplay = document.querySelector(".beer-img");
    const abvDisplay = document.querySelector(".beer-abv");

    /* Uses a placeholder image in case image from API is null or empty */
    function setPlaceholderImage(imgElement) {
    const placeholderImageUrl = window.location.origin + '/assets/images/placeholder_beer_image.png';
    imgElement.src = placeholderImageUrl;
    }

    /* Displays beer data on landing page */
     function displayBeerDetails(data) {
        const name = data[0].name;
        const image_url = data[0].image_url;
        const description = data[0].description
        const abv = data[0].abv

        descriptionDisplay.innerHTML = description;
        titleDisplay.innerHTML = name;
        abvDisplay.innerHTML = abv + "%";

        // Check if image_url is not null and not empty
        if (image_url && image_url.trim() !== '') {
            imgDisplay.src = image_url;
        } else {
            setPlaceholderImage(imgDisplay);
        }
    }
     /* Gets beer data from API */
    function getBeer(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayBeerDetails(data);
            })
            .catch(error => {
                console.error('Error fetching beer data:', error);
                setPlaceholderImage(imgDisplay);
            });
    }

});