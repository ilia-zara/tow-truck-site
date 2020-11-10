function scrollTo() {
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.getElementById("header").offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
}

export default scrollTo;
