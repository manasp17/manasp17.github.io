// bmr_script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmr-Form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission from reloading the page

            const age = parseInt(document.getElementById('age').value);
            const gender = document.getElementById('gender').value;
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);

            // Validate inputs
            if (isNaN(age) || isNaN(weight) || isNaN(height)) {
                alert('Please enter valid numeric values for all fields.');
                return;
            }

            // Calculate BMR based on gender
            let bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            // Save BMR and other calculations to localStorage
            const activityMultiplier = 1.2;  // You can modify this to get activity level input
            const maintenance = bmr * activityMultiplier;
            const weightLoss = maintenance - 500;
            const weightGain = maintenance + 500;

            localStorage.setItem('bmr', bmr.toFixed(2));
            localStorage.setItem('maintenance', maintenance.toFixed(2));
            localStorage.setItem('weightLoss', weightLoss.toFixed(2));
            localStorage.setItem('weightGain', weightGain.toFixed(2));

            // Redirect to results page
            window.location.href = 'results.html';
        });
    }
});
