(function () {
  var menu = document.querySelector(".simp-menu");

  var openMenu = document.querySelector(".menu-button.open");
  openMenu.addEventListener("click", function () {
    menu.classList.add("open");
    console.log(menu);
  });

  var closeMenu = document.querySelector(".menu-button.close");
  closeMenu.addEventListener("click", function () {
    menu.classList.remove("open");
  });
})();
