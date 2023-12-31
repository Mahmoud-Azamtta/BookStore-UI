const navbar = document.querySelector(".navbar");
const scrollUp = document.querySelector(".navbar .scroll-up");
const navbarLogo = document.querySelector(".navbar .img-container");
const loading = document.querySelector(".loading");
const loader = document.querySelector(".loading .loader"); 

function loadPage() {
    setTimeout(() => {
        loading.classList.add("opacity-0", "invisible");
        loader.style.display = "none";
        document.body.style.overflow = "auto";
    }, 1000);
}

// function navbarBehavior(elementBelow) {
//     if (screen.width > 992) {
//         if (window.scrollY > navbar.offsetTop) {
//             navbar.classList.add("fixed-top", "z-2", "border-bottom");
//             navbar.classList.remove("my-2");
//             elementBelow.style.marginTop = `${navbar.offsetHeight}px`;
//             scrollUp.classList.add("d-flex");
//             scrollUp.classList.remove("d-none");
//             navbarLogo.classList.add("d-flex");
//             navbarLogo.classList.remove("d-none");
//             navbarLogo.style.opacity = 1;
//             scrollUp.style.opacity = 1;
//         }
//         if (window.scrollY <= elementBelow.offsetTop) {
//             navbar.classList.remove("fixed-top", "z-2", "border-bottom");
//             navbar.classList.add("my-2");
//             elementBelow.style.marginTop = 0;
//             scrollUp.classList.remove("d-flex");
//             scrollUp.classList.add("d-none");
//             navbarLogo.classList.remove("d-flex");
//             navbarLogo.classList.add("d-none");
//             navbarLogo.style.opacity = 0;
//             scrollUp.style.opacity = 0;
//         }
//     } 
//     else {
//         navbar.classList.remove("fixed-top");
//         navbar.classList.add("my-2");
//         scrollUp.classList.remove("d-flex");
//         scrollUp.classList.add("d-none");
//         navbarLogo.classList.remove("d-flex");
//         navbarLogo.classList.add("d-none");
//     }
// }

function navbarBehavior(elementBelow, navbarPosition) {
    if (screen.width > 992) {
        if (window.scrollY > navbarPosition) {
            navbar.classList.add("fixed-top", "z-2", "border-bottom");
            navbar.classList.remove("my-2");
            elementBelow.style.marginTop = `${navbar.offsetHeight}px`;

            scrollUp.classList.add("d-flex");
            scrollUp.classList.remove("d-none");
            navbarLogo.classList.add("d-flex");
            navbarLogo.classList.remove("d-none");
            navbarLogo.style.opacity = 1;
            scrollUp.style.opacity = 1;
        }
        else {
            navbar.classList.remove("fixed-top", "z-2", "border-bottom");
            navbar.classList.add("my-2");
            elementBelow.style.marginTop = 0;
            scrollUp.classList.remove("d-flex");
            scrollUp.classList.add("d-none");
            navbarLogo.classList.remove("d-flex");
            navbarLogo.classList.add("d-none");
            navbarLogo.style.opacity = 0;
            scrollUp.style.opacity = 0;
        }
    } 
    else {
        navbar.classList.remove("fixed-top");
        navbar.classList.add("my-2");
        scrollUp.classList.remove("d-flex");
        scrollUp.classList.add("d-none");
        navbarLogo.classList.remove("d-flex");
        navbarLogo.classList.add("d-none");
    }
}

function buildStarRating(rating) {
    let half = false;
    if (!Number.isInteger(rating)) {
        rating = Math.floor(rating);
        half = true;
    }
    let empty = 5 - rating;
    let starRating = "";
    while (rating > 0) {
        starRating += `<i class="fa-solid fa-star"></i>`;
        rating--;
    }
    if (half) {
        starRating += `<i class="fa-regular fa-star-half-stroke"></i>`;
        empty--;
    }
    while (empty > 0) {
        starRating += `<i class="fa-regular fa-star"></i>`;
        empty--;
    }

    return starRating;
}

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export const functions = {
    loadPage, 
    navbarBehavior, 
    scrollTop,
    buildStarRating
}