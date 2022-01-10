import "./styles.css";

document.getElementById("app").innerHTML = `
<section id="banner">
  <ul class="slider">
	  <li class="slide current" style='background-image: url(https://cdn2.thecatapi.com/images/JR48AEqts.jpg)'>
	  <li class="slide" style='background-image: url(https://cdn2.thecatapi.com/images/zyW4wflo3.jpg)'/>
	  <li class="slide" style='background-image: url(https://cdn2.thecatapi.com/images/JQMGbOP3q.jpg)'/>
	  <li class="slide" style='background-image: url(https://cdn2.thecatapi.com/images/dkN5wGUxC.jpg)'/>
	  <li class="slide" style='background-image: url(https://cdn2.thecatapi.com/images/TdxQ2VvJK.jpg)'/>
  </ul>
  <button class="arrow prev-btn"></button>
  <button class="arrow next-btn"></button>
  <nav id="navigation">
	  <ul class="bullets">
		  <li class="bullet current" data-index="0"></li>
		  <li class="bullet" data-index="1"></li>
		  <li class="bullet" data-index="2"></li>
		  <li class="bullet" data-index="3"></li>
		  <li class="bullet" data-index="4"></li>
	  </ul>
  </nav>
</section>
`;

let currentIdx = 0;
const CURRENT = "current";
const $slideList = document.querySelectorAll(".slide");
const $bulletList = document.querySelectorAll(".bullet");
const $buttons = document.querySelectorAll(".arrow");
const $bullets = document.querySelector(".bullets");

const changeCurrentSlide = (n) => {
    n = parseInt(n);
    if (n < 0) {
        n = $slideList.length - 1;
    }
    if (n > $slideList.length - 1) {
        n = 0;
    }
    $slideList[currentIdx].classList.remove(CURRENT);
    $bulletList[currentIdx].classList.remove(CURRENT);
    $slideList[n].classList.add(CURRENT);
    $bulletList[n].classList.add(CURRENT);
    currentIdx = n;
};

const handleBulletClick = (e) => {
    if (e.target.classList.contains("bullet")) {
        changeCurrentSlide(e.target.dataset.index);
    }
};

const handleButtonClick = (e) => {
    if (e.target.classList.contains("prev-btn")) {
        changeCurrentSlide(currentIdx - 1);
        return;
    }
    if (e.target.classList.contains("next-btn")) {
        changeCurrentSlide(currentIdx + 1);
        return;
    }
};

$bullets.addEventListener("click", handleBulletClick);
$buttons.forEach((button) =>
    button.addEventListener("click", handleButtonClick)
);
