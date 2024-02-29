document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    input.addEventListener("focus", function() {
      const label = this.nextElementSibling;
      label.style.color = "#007bff";
    });

    input.addEventListener("blur", function() {
      const label = this.nextElementSibling;
      label.style.color = "#999";
    });
  });
});