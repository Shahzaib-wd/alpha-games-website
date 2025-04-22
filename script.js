document.addEventListener("DOMContentLoaded", function () {
  const hearts = document.querySelectorAll(".fa-heart");

  hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
      this.classList.toggle("fa-regular");
      this.classList.toggle("fa-solid");
      this.classList.toggle("text-danger");

      if (this.classList.contains("fa-solid")) {
        alert("Added to Favourites 💖");
      } else {
        alert("Removed from Favourites ❌");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        // Optional: ek baar hi chahiye toh unobserve kar do
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // half visible hote hi chale
  });

  const target = document.querySelector("#left");
  if (target) {
    observer.observe(target);
  }
});
