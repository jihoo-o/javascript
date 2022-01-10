import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Routing</h1>
<nav id="nav">
  <ul>
    <li data-route="/home">Home</li>
    <li data-route="/profile">Profile</li>
    <li data-route="/search">Search</li>
  </ul>
</nav>
<div id="root">
</div>
`;

const root = document.querySelector("#root");
const nav = document.querySelector("#nav");
const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

const route = () => {
    const pathName = window.location.pathname;
    switch (pathName) {
        case "/":
        case "/home":
            new Home(root);
            break;
        case "/search":
            new Search(root);
            break;
        case "/profile":
            new Profile(root);
            break;
        default:
    }
};

nav.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const { route } = li.dataset;
    window.dispatchEvent(
        new CustomEvent(ROUTE_CHANGE_EVENT, { detail: { route } })
    );
});

// Detecting history.back(), history.go()
window.addEventListener("popstate", () => {
    route();
});

// Detecting history.pushState()
window.addEventListener(ROUTE_CHANGE_EVENT, (e) => {
    window.history.pushState(
        {},
        null,
        window.location.origin + `${e.detail.route}`
    );
    route();
});
