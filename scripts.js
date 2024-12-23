function showContactForm() {
  document.getElementById("contactForm").style.display = "block";
}

function hideContactForm() {
  document.getElementById("contactForm").style.display = "none";
}

function searchSite() {
  var searchTerm = document.getElementById("searchBar").value;
  console.log("Search term:", searchTerm);

  // In a real application, this would be replaced with actual search logic.
  // For this example, we'll just show an alert with the search term.
  alert(
    "Searching for: " +
      searchTerm +
      "\n\n(This is a placeholder. Actual search functionality would be implemented here)"
  );

  // Clear the input field after searching
  document.getElementById("searchBar").value = "";
}

function hideContactForm() {
    document.getElementById("contactForm").style.display = "none";
  }
  
  // Add form submission handler
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contactForm form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        alert("This is a placeholder. Actual success message would be implemented here");
        hideContactForm(); // Close the form after showing message
      });
    }
  });