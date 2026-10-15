
//mobile üçün menunun açılıb bağlanması üçün lazım olan obyektlər
const menuButton = document.getElementById("menuButton");
const slideMenuContainer = document.getElementById("slideMenuContainer");
const slideMenuCloseButton = document.getElementById("slideMenuCloseButton");

//cartın işləməsi üçün lazım olan obyektlər
const cartContainer = document.getElementById("cartContainer");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const CartRow = document.getElementById("CartRow");
const cartButton = document.getElementById("cartButton");

//menunun işləməsi üçün lazım olan funksiya
menuButton.addEventListener("click", () => {
    if (slideMenuContainer.style.display === "none") {
        slideMenuContainer.style.display = "block";
    }
    else {
        slideMenuContainer.style.display = "none";
    }
});

//cart işarəsinə basanda açılan modul pəncərə üçün lazım olan funksiyalar
slideMenuCloseButton.addEventListener("click", () => {
    if (slideMenuContainer.style.display === "block") {
        slideMenuContainer.style.display = "none";
    }
    else {
        slideMenuContainer.style.display = "block";
    }
});

cartButton.addEventListener("click", () => {
    if (cartContainer.style.display === "none") {
        cartContainer.style.display = "flex";

    }
    else {
        cartContainer.style.display = "none";
    }
});
