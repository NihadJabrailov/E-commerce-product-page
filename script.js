
//mobile üçün menunun açılıb bağlanması üçün lazım olan obyektlər
const menuButton = document.getElementById("menuButton");
const slideMenuContainer = document.getElementById("slideMenuContainer");
const slideMenuCloseButton = document.getElementById("slideMenuCloseButton");

//cartın işləməsi üçün lazım olan obyektlər
const cartContainer = document.getElementById("cartContainer");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const CartRow = document.getElementById("CartRow");
const cartButton = document.getElementById("cartButton");

//slider şəkil üçün lazım olan obyektlər
const sliderPhoto = document.getElementById("sliderPhoto");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");

//menunun işləməsi üçün lazım olan funksiya
menuButton.addEventListener("click", () => {
    if (slideMenuContainer.style.display !== "block") {
        slideMenuContainer.style.display = "block";
    }
    else {
        slideMenuContainer.style.display = "none";
    }
});

//menunu bağlamaq üçün lazım olan funksiya
slideMenuCloseButton.addEventListener("click", () => {
    if (slideMenuContainer.style.display !== "none") {
        slideMenuContainer.style.display = "none";
    }
    else {
        slideMenuContainer.style.display = "block";
    }
});

//cart işarəsinə basanda açılan modul pəncərə üçün lazım olan funksiyalar
cartButton.addEventListener("click", () => {
    if (cartContainer.style.display !== "flex") {
        cartContainer.style.display = "flex";

    }
    else {
        cartContainer.style.display = "none";
    }
});


// slider şəkil üçün lazım olan funksiya
const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];
let currentImageIndex = 0;

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Sona çatanda əvvələ qayıdır
    sliderPhoto.src = images[currentImageIndex];
});

previousButton.addEventListener('click', () => { //əvvələ qayıdır
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    sliderPhoto.src = images[currentImageIndex];
});

