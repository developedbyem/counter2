const currentNum = document.getElementById("number");
const buttons = document.querySelectorAll(".btn");

let newNum = 0;
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase")) newNum++;
    else if (btn.classList.contains("decrease")) newNum--;
    else newNum = 0;

    currentNum.innerHTML = newNum;

    if (newNum > 0) currentNum.style.color = "#8bff8b";
    else if (newNum < 0) currentNum.style.color = "#ffabab";
    else currentNum.style.color = "#fff";
  });
});
