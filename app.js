const menuOpen = document.getElementById("menu-open");
const content = document.getElementById("content");
const close = document.getElementById("close");

menuOpen.addEventListener("click", () => {
  content.style.display = "block";
});

close.addEventListener("click", () => {
  content.style.display = "none";
});
