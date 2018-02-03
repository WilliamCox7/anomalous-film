export function moveLeft() {
  let posts = document.getElementsByClassName("rendered-sections");
  let wrapper = posts[0].parentElement;
  posts[0].style.marginLeft = (0 - (window.innerWidth / 2)) + "px";
  posts[1].style.opacity = 0;
  posts[2].style.opacity = 1;
  setTimeout(function() {
    posts[0].remove();
    let section = document.createElement("section");
    section.style.width = "560px";
    wrapper.append(section);
  }, 500);
}
