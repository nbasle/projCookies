let btn = document.querySelector("#mode");

let txt = document.querySelector("span");
let thSombre = "Thème Sombre";
let thClaire = "Thème Claire";

const modeSombre = () => {
  localStorage.setItem("theme", thSombre);
  document.querySelector("span").textContent = thSombre;
  document.body.className = "dark";
};

const modeClaire = () => {
  localStorage.setItem("theme", thClaire);
  document.querySelector("span").textContent = thClaire;
  document.body.className = "";
};
btn.addEventListener("click", () => {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === thSombre) {
      modeClaire();
    } else {
      modeSombre();
    }
  } else {
    modeSombre();
  }
});

if (localStorage.getItem("theme") === thSombre) {
  modeClaire();
}
