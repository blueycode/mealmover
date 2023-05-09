window.addEventListener("scroll", () => {
    const navBar = document.querySelector("#navbar");
    const truck = document.querySelector("#truck");
    const info = document.querySelector("#info");
    const overlay = document.querySelector("#overlay");
    const logoText = document.querySelector("#logo > span");

    let scrollValue = window.scrollY;
    let documentHeight = document.body.scrollHeight;
    let currentScroll = scrollValue + window.innerHeight;

    if (currentScroll + 150 > documentHeight) {
        navBar.classList.add("sticky-navbar");
        logoText.classList.add("sticky-logo");
    } else {
        navBar.classList.remove("sticky-navbar");
        logoText.classList.remove("sticky-logo");
    }

    truck.style.left = scrollValue * 1.5 + "px";
    info.style.left = scrollValue * -1.5 + "px";
    overlay.style.left = scrollValue * -1.5 + "px";
});