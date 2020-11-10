const scrollToTopBtn = document.querySelector(".to-top");
const rootElement = document.documentElement;
const toggleRatio = 0.4;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > toggleRatio) {
    scrollToTopBtn.classList.add("show-to-top");
  } else {
    scrollToTopBtn.classList.remove("show-to-top");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function arrowToTop() {
  scrollToTopBtn.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);
}

export default arrowToTop;
