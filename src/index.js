import "./styles.css";

/**
 * Infinite scroll using Insetersction Observer API
 *
 * Example 1
 * One target: class='sentinel'
 *
 */
document.getElementById("app").innerHTML = `
<h1>Infinite scroll</h1>
<div class='scroller'>
    <div class='box'>A</div>
    <div class='box'>B</div>
    <div class='box'>C</div>
    <div class='box'>D</div>
    <div class='box'>E</div>
    <div class='box'>F</div>
    <div class='sentinel'></div>
    <div class='box'>G</div>
    <div class='box'>H</div>
    <div class='box'>I</div>
    <div class='box'>J</div>
    <div class='box'>K</div>
</div>
`;

const options = {
    root: null,
    rootMargin: "0px",
    /**
     * If the treshold is an array, The callback is invoked by each threshold.
     */
    // threshold: [0.1, 0.3, 0.5]
    threshold: 1.0
};

const loadItems = (n) => {
    for (var i = 0; i < n; i++) {
        const newItem = document.createElement("div");
        newItem.classList.add("box");
        newItem.innerText = "new box";
        scroller.appendChild(newItem);
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadItems(10);
            scroller.appendChild(target);
            loadItems(5);
        }
    });
}, options);

const scroller = document.querySelector(".scroller");
const target = document.querySelector(".sentinel");
observer.observe(target);

/**
 * Example 2
 * Multiple targets: class='box'
 *
 */

// document.getElementById("app").innerHTML = `
// <h1>Infinite scroll</h1>
// <div class='box'>A</div>
// <div class='box'>B</div>
// <div class='box'>C</div>
// <div class='box'>D</div>
// <div class='box'>E</div>
// <div class='box'>F</div>
// <div class='box'>G</div>
// <div class='box'>H</div>
// <div class='box'>I</div>
// <div class='box'>J</div>
// <div class='box'>K</div>
// `;
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) { // Detecting the current section
//             console.log(entry);
//         }
//     });
// }, options);
// const targets = document.querySelectorAll(".box");
// targets.forEach((target) => observe(target));

// --------------Expected--------------
/**
 * Example 3
 * SEO friendly
 * ref: https://developers.google.com/search/blog/2014/02/infinite-scroll-search-friendly
 *
 */
