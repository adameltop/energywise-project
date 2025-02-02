document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('#calculate-button');
    const findRenewableButton = document.querySelector('#find-renewable-button');
    const carbonMessageDiv = document.querySelector('#carbon-message');
    const renewableMessageDiv = document.querySelector('#renewable-message');

    calculateButton.addEventListener('click', function() {
        // Simple carbon footprint calculation logic (mock example)
        let carbonFootprint = 300; // Mock data: assume the user's footprint is 300g CO2 per day.
        carbonMessageDiv.textContent = `Your estimated carbon footprint is ${carbonFootprint}g of CO2 per day. Reduce it by using renewable energy sources!`;
        carbonMessageDiv.style.backgroundColor = "#4caf50";
        carbonMessageDiv.style.color = "white";
        carbonMessageDiv.style.padding = "10px";
        carbonMessageDiv.style.borderRadius = "5px";
    });

    findRenewableButton.addEventListener('click', function() {
        // Example message simulating finding renewable providers
        renewableMessageDiv.textContent = "We found several renewable energy providers near you! Contact them for more information.";
        renewableMessageDiv.style.backgroundColor = "#81c784";
        renewableMessageDiv.style.color = "white";
        renewableMessageDiv.style.padding = "10px";
        renewableMessageDiv.style.borderRadius = "5px";
    });
});
