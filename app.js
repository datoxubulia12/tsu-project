document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 0) {
    nav.style.backgroundColor = "#29323c";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
