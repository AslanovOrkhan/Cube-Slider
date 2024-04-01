let cube = document.querySelector(".cube-image");
let Next = document.getElementById("next");
let Prev = document.getElementById("prev");

let pos = 0;

Next.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
Prev.addEventListener("click", () => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
