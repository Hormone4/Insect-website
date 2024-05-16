

// Select all radios class="carousel-choice"
let radios = document.querySelectorAll('.carousel-choice');
// Select the h1 id="insect-choice"
let h1 = document.querySelector('#insect-choice');

// Add a 'change' event listener to each radio button
radios.forEach((radio, index) => {
    // Set the EventListener to check when a radio button is selected
    radio.addEventListener('change', () => {
        switch(index) {
            case 0:
                h1.textContent = "Your choice: Beetle";
                break;
            case 1:
                h1.textContent = "Your choice: Formicidae";
                break;
            case 2:
                h1.textContent = "Your choice: Diptera";
                break;
            case 3:
                h1.textContent = "Your choice: monster";
                break;
            default:
                h1.textContent = "Your choice: unknown";
        }
    });
});