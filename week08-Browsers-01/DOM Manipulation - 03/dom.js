function handler1() {
  alert('Thanks!');
}

function handler2() {
  alert('Thanks again!');
}

element4.onclick = () => alert("Hello");
element4.addEventListener("click", handler1); // Thanks!
element4.addEventListener("click", handler2); // Thanks again!


