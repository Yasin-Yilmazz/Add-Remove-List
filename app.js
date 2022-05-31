const appendBtn = document.getElementById("append");
const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");
const langInp = document.querySelector("#lang-input");
const ul = document.querySelector(".lang-ul");

appendBtn.onclick = () => {
  if (!langInp.value) {
    alert("Please enter a Programming Language");
  } else {
    ul.innerHTML += `<ul>${langInp.value}</ul>`;
    langInp.value = "";
    javaScriptControl();
  }
};

deleteBtn.onclick = () => {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastChild)
    : alert("There is no lannguage to delete");
};

resetBtn.onclick = () => {
  ul.innerHTML = "";
};

langInp.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    appendBtn.onclick();
  }
  if (event.code === "Delete") {
    deleteBtn.onclick();
  }
});

window.onload = () => {
  langInp.focus();
  javaScriptControl;
};

const javaScriptControl = () => {
  document.querySelectorAll("ul").forEach((lang) => {
    const lowerCase = lang.textContent.toLowerCase();
    if (lowerCase === "javascript") {
      lang.setAttribute("id", "red");
    }
  });
};
