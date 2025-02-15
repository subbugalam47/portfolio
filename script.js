document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object to hold the form data
    const formData = new FormData(this);

    // Construct the Google Forms submission URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc0zDB5XB-YmR0HSRzCFCBF2h76ZlaVbjzG-Hc1SocfZNjl8A/viewform?usp=dialog';

    // Submit the form data using fetch API
    fetch(googleFormURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required to avoid CORS issues
    })
    .then(() => {
        alert('Form submitted successfully!');
        this.reset(); // Optionally reset the form
    })
    .catch(() => {
        alert('There was an error submitting the form.');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all carousel containers
    const carousels = document.querySelectorAll(".image-carousel");

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll(".carousel-image");
        let currentIndex = 0;

        if (images.length === 0) return; // Skip empty carousels

        function showNextImage() {
            // Hide the current image
            images[currentIndex].classList.remove("active");

            // Increment index and loop back if necessary
            currentIndex = (currentIndex + 1) % images.length;

            // Show the next image
            images[currentIndex].classList.add("active");
        }

        // Start an independent carousel for each section
        images[0].classList.add("active"); // Ensure first image is visible
        setInterval(showNextImage, 2000); // Change every 2 seconds
    });
});
