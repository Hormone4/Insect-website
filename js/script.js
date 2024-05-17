

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
                h1.textContent = "Your choice: Araneae";
        }
    });
});





function sendForm() {
    // Select the form
    var form = document.getElementById('QuizId');

    // Select all input and select elements within the form
    var inputs = form.querySelectorAll('input, select');

    // Clear the value of each input and select element
    inputs.forEach(function(input) {
        input.value = '';
    });

    // Hide the button & text
    document.getElementById('send_form_info').style.display = 'none';
    document.getElementById('send_form_info_p').style.display = 'none';

    // Change the text of the (empty) h1 element
    document.getElementById('shipping-time').textContent = 'Your coordinates were saved. Your insect will arrive soon!';
}