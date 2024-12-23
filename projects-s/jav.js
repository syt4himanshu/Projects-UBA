
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      menu.style.animation = "menuDrop 0.5s ease-out";
    } else {
      menu.style.display = "none";
    }
  }
