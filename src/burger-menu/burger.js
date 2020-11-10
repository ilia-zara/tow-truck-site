function addClassBurger() {
  const headerBurger = document.querySelector(".header-burger");
  const headerMenu = document.querySelector(".header-menu");
  const lock = document.querySelector("body");
  const headerList = document.querySelector(".header-list");

  headerBurger.onclick = () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    lock.classList.toggle("lock");
  };

  headerList.onclick = () => {
    headerBurger.classList.remove("active");
    headerMenu.classList.remove("active");
    lock.classList.toggle("lock");
  };
}

export default addClassBurger;
