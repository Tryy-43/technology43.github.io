const strong = document.querySelector(".text-custom");
// const arr = [{ name: "JavaScript" }, { name: "ML Tech" }, { name: "AI Tech" }];

// const intime = () => {
//   setInterval(function () {
//     console.log("hello");
//     const count = Math.floor(Math.random() * arr.length);
//     const inner = arr[count].name;
//     strong.innerHTML = inner;
//   }, 6000);
// };
// intime();
const textLoad = () => {
  setTimeout(() => {
    strong.innerHTML = "New JavaScript";
  }, 0);
  setTimeout(() => {
    strong.innerHTML = "ML Technique";
  }, 4000);
  setTimeout(() => {
    strong.innerHTML = "Al Technique";
  }, 8000);
  setTimeout(() => {
    strong.innerHTML = "New Algorithm";
  }, 12000);
};
textLoad();
setInterval(textLoad, 16000);
// const btn = document.querySelector(".btn-custom-ripple");
// btn.addEventListener("click", (e) => {
//   let x = e.clientX - btn.offsetLeft;
//   let y = e.clientY - btn.offsetTop;
//   const circle = document.createElement("div");
//   circle.style.left = x + "px";
//   circle.style.right = y + "px";
//   circle.className = "circle";
//   btn.appendChild(circle);
// });
// const accordion = document.querySelectorAll(".accordion-item");
// accordion.forEach((e) => {
//   e.addEventListener("click", (p) => {
//     console.log(p.currentTarget);
//   });
// });
