const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no yahaha-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I like you too princess";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - no yahahaBtnRect.width;
  const maxY = window.innerHeight - no yahahaBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  no yahahaBtn.style.left = randomX + "px";
  no yahahaBtn.style.top = randomY + "px";
});
