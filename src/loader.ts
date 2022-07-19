function load(): void {
  setTimeout(opacityLoader, 3000);
  setTimeout(displayContainer, 4500);
}

function opacityLoader(): void {
  document.getElementById("preloader").style.opacity = "0";
  //$(".htmlphotos").css("overflow-y", "scroll");
  document.getElementById("preloader").style.pointerEvents = "none";
}

function displayContainer() {
  document.getElementById("preloader").style.display = "none";
}
