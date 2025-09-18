// Toggle mobile menu
function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("show");
}

// Contact form success message
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  this.reset();
});