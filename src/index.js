import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Lazy load</h1>
<div id='root'>
</div>
`;

/**
 * Lazy load using Intersection Observer API
 * ref: https://imagekit.io/blog/lazy-loading-images-complete-guide/#using-intersection-observer-api-to-trigger-image-loads
 *
 * Example 1
 *
 */
const $target = document.querySelector("#root");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            observer.unobserve(image);
        }
    });
});
let data = [];

const init = async () => {
    try {
        const res = await fetch(
            `https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=cat`
        );
        if (!res.ok) {
            throw new Error("error");
        }
        setState(await res.json());
    } catch (e) {
        init();
    }
};

const setState = ({ data: nextData }) => {
    data = nextData;
    render();
};

const render = () => {
    /**
     * To prevent preloading the image,
     * instead of 'src', use another attribute like 'data-src'.
     */
    $target.innerHTML = data
        .map((img) => `<img data-src='${img.url}' class='lazy'>`)
        .join("");

    const images = document.querySelectorAll(".lazy");
    images.forEach((image) => {
        observer.observe(image);
    });
};

init();
