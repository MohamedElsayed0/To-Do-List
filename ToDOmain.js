const input = document.getElementById("input");
const row = document.getElementById("row");
const children = document.querySelectorAll(".child");
const Check = document.querySelectorAll(".rounded-check");
const btn = document.getElementById("addBtn");
const completed = document.getElementById("completed");
const all = document.getElementById("all");
let activ = document.getElementById("activ");
let newChild = document.getElementsByClassName("child").length;
let clearCom = document.getElementById("clearCom");
let itemLeft = document.getElementById("itemLeft");
let cross = document.getElementsByClassName("image");
let sun = document.getElementById("sun");
itemLeft.innerHTML = newChild;

let checked = (ev) => {
  ev.target.classList.toggle("checked");
  ev.target.parentElement.classList.add("completed");
  if (ev.target.classList.contains("checked")) {
    ev.target.firstElementChild.src = "./images/icon-check.svg";
    ev.target.nextElementSibling.style.textDecoration = "line-through";
  } else {
    ev.target.firstElementChild.src = "";
    ev.target.nextElementSibling.style.textDecoration = "none";
  }
};

let addElement = () => {
  if (input.value != "") {
    let creatDiv = document.createElement("div");
    creatDiv.setAttribute("class", "child");
    creatDiv.setAttribute("draggable", "true");

    let creatChiledDiv = document.createElement("div");
    creatChiledDiv.setAttribute("class", "rounded-check");

    let img = document.createElement("img");
    img.setAttribute("src", "");

    let span = document.createElement("span");
    let img2 = document.createElement("img");
    img2.setAttribute("src", "./images/icon-cross.svg");
    img2.addEventListener("click", () => {
      row.removeChild(img2.parentElement);
      newChild = document.getElementsByClassName("child").length;
      itemLeft.innerHTML = newChild;
    });
    span.innerHTML = input.value;
    creatChiledDiv.appendChild(img);
    creatDiv.appendChild(creatChiledDiv);
    creatDiv.appendChild(span);
    creatDiv.appendChild(img2);
    creatChiledDiv.addEventListener("click", checked);
    row.appendChild(creatDiv);
    input.value = "";
    newChild = document.getElementsByClassName("child").length;
    itemLeft.innerHTML = newChild;
  }
};
sun.addEventListener("click", () => {
  let src = sun.getAttribute("src");
  if (src === "images/icon-sun.svg") {
    sun.setAttribute("src", "images/icon-moon.svg");
  } else {
    sun.setAttribute("src", "images/icon-sun.svg");
  }

  let bgImg = document.getElementById("bg-img");
  if (bgImg.classList.contains("img")) {
    bgImg.classList.remove("img");
  } else {
    bgImg.classList.add("img");
  }

  let fluid = document.getElementById("fluid");
  if (fluid.classList.contains("fluid-dark")) {
    console.log("yes");
    fluid.classList.remove("fluid-dark");
  } else {
    fluid.classList.add("fluid-dark");
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addElement();
  }
});

btn.addEventListener("click", addElement);

Check.forEach((element) => {
  element.addEventListener("click", checked);
});

activ.addEventListener("click", () => {
  let child = document.getElementsByClassName("child");
  for (let i = 0; i < child.length; i++) {
    const element = child[i];
    if (element.classList.contains("completed")) {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  }
});

completed.addEventListener("click", () => {
  let checked = document.getElementsByClassName("checked");
  for (let i = 0; i < checked.length; i++) {
    const element = checked[i];
    if (element) {
      element.parentElement.style.display = "flex";
      let child = document.getElementsByClassName("child");
      for (let i = 0; i < child.length; i++) {
        const element = child[i];
        if (!element.classList.contains("completed"))
          element.style.display = "none";
      }
    }
  }
});

all.addEventListener("click", () => {
  let child = document.getElementsByClassName("child");
  for (let i = 0; i < child.length; i++) {
    const element = child[i];
    if (element) element.style.display = "flex";
  }
});
clearCom.addEventListener("click", () => {
  let remove = document.getElementsByClassName("completed");
  for (let i = 0; i < remove.length; i++) {
    const element = remove[i];
    if (element) console.log(element);
    row.removeChild(element);
    newChild = document.getElementsByClassName("child").length;
    itemLeft.innerHTML = newChild;
  }
});
for (let i = 0; i < cross.length; i++) {
  const element = cross[i];
  element.addEventListener("click", () => {
    row.removeChild(element.parentElement);
    newChild = document.getElementsByClassName("child").length;
    itemLeft.innerHTML = newChild;
  });
}
new Sortable(row, {
  animation: 350,
});
