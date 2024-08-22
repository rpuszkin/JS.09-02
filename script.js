const button = document.createElement("button");
button.id = "startTimeout";
button.textContent = "Start";
document.body.appendChild(button);

button.addEventListener("click", function () {
  setTimeout(function () {
    document.body.innerHTML = "<h1>Boom!</h1>";
  }, 5000);
});
