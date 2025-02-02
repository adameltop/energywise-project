// Toggle visibility of the contact information for each provider
document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-contact');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const providerContact = this.nextElementSibling;
      if (providerContact.style.display === 'none' || providerContact.style.display === '') {
        providerContact.style.display = 'block';
        this.textContent = 'Hide Contact Info';  // Change button text to "Hide"
      } else {
        providerContact.style.display = 'none';
        this.textContent = 'Show Contact Info';  // Change button text to "Show"
      }
    });
  });

  // Simple confirmation message on button click (for example, "Contact Provider" button)
  const contactButtons = document.querySelectorAll('.contact-btn');
  contactButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Thank you for your interest! The provider will contact you soon.');
    });
  });
});
