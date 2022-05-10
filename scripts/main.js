//Initial loading when HTML page is rendered
setTimeout(function () {
  sortCards();
}, 0);

//Based on size of the window given colors are assigned to number cards
function numberCardColors() {
  const givenColors = [
    "#6F98A8",
    "#2B8EAD",
    "#2F454E",
    "#2B8EAD",
    "#2F454E",
    "#BFBFBF",
    "#BFBFBF",
    "#6F98A8",
    "#2F454E",
  ];
  let cards = document.getElementsByClassName("numberCard");
  if (window.innerWidth <= 767) {
    for (let a = 0; a < cards.length; a++) {
      cards[a].style.backgroundColor = "#EFEFEF";
      cards[a].style.borderLeft = `9px solid ${givenColors[a]}`;
    }
  } else {
    for (let a = 0; a < cards.length; a++) {
      cards[a].style.backgroundColor = givenColors[a];
    }
  }
}

function createElement(number) {
  let element = document.createElement("div");
  element.className = "numberCard";
  element.textContent = number;
  return element;
}

//sorting the cards
function sortCards() {
  const lastNumber = 9;
 let cards = document.getElementById("num-cards-layout");
  cards.innerHTML = "";
  for (let a = 1; a <= lastNumber; a++) {
    cards.appendChild(createElement(a));
  }
  numberCardColors();
}

//shuffling the cards
function shuffleCards() {
    let cards = document.getElementById("num-cards-layout");
  for (let a = cards.children.length; a >= 0; a--) {
    cards.appendChild(cards.children[(Math.random() * a) | 0]);
  }
}

//when resizing the window assigning colors to number cards
window.addEventListener("resize", function () {
  numberCardColors();
});
