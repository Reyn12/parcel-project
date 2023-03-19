const card = document.getElementsByClassName("card");
const btnKanan = document.getElementById("kanan");
const btnKiri = document.getElementById("kiri");

const card2 = document.getElementsByClassName("card2");
const btnKanan2 = document.getElementById("kanan2");
const btnKiri2 = document.getElementById("kiri2");

btnKanan.addEventListener("click", () => {
  for (let i = 0; i < card.length; i++) {
    card[i].style.transform = "translateX(-170%)";
  }
});

btnKiri.addEventListener("click", () => {
  for (let i = 0; i < card.length; i++) {
    card[i].style.transform = "translateX(0px)";
  }
});

btnKanan2.addEventListener("click", () => {
  for (let i = 0; i < card2.length; i++) {
    card2[i].style.transform = "translateX(-440%)";
  }
});

btnKiri2.addEventListener("click", () => {
  for (let i = 0; i < card2.length; i++) {
    card2[i].style.transform = "translateX(0px)";
  }
});
