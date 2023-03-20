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

// ksahdusahydusa
const cardcontact = document.querySelectorAll(".card-contact");
const cardContents = document.querySelectorAll(".card-content");

cardcontact.forEach((card, index) => {
  card.addEventListener("click", function () {
    cardcontact.forEach((c) => {
      c.classList.remove("active");
    });
    card.classList.add("active");
    cardContents.forEach((cardContent) => {
      cardContent.classList.add("hidden");
    });
    cardContents[index].classList.toggle("hidden");
  });
});

{
  /* <div class="card-container">
  <div class="card-contact contact-card">
    <h2>Contact Card</h2>
  </div>
  <div class="card-contact maps-card">
    <h2>Maps Card</h2>
  </div>
  <div class="card-contact faq-card">
    <h2>FAQ Card</h2>
  </div>
</div>
<div class="hidden card-content" id="contact">
  <h3>INI card-contact CONTACT</h3>
</div>
<div class="hidden card-content" id="maps">
  <h3>INI card-contact MAPS</h3>
</div>
<div class="hidden card-content" id="faq">
  <h3>INI card-contact FAQ</h3>
</div> */
}
