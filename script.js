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

//Məhsulun sayının artırıb azaltmaq üçün lazım olan obyektlər
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");
const productCount = document.getElementById("productCount");
const cartProductCount = document.getElementById("cartProductCount");
const productPrice = document.getElementById("productPrice");
const deleteButton = document.getElementById("deleteButton");
const addCartButton = document.getElementById("addCartButton");

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

// Thumbnail şəkillər üçün obyektlər və funksiyalar
const thumbnailItems = document.querySelectorAll(".thumbnailItem");

function setActiveThumbnail(index) {
    thumbnailItems.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add("activeThumbnail");
        } else {
            thumb.classList.remove("activeThumbnail");
        }
    });
}

thumbnailItems.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        currentImageIndex = index;
        sliderPhoto.src = images[currentImageIndex];
        setActiveThumbnail(currentImageIndex);
    });
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Sona çatanda əvvələ qayıdır
    sliderPhoto.src = images[currentImageIndex];
    setActiveThumbnail(currentImageIndex);
});

previousButton.addEventListener('click', () => { //əvvələ qayıdır
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    sliderPhoto.src = images[currentImageIndex];
    setActiveThumbnail(currentImageIndex);
});

//Məhsulun sayının artırıb azaltmaq və karta əlavə etmək üçün lazım olan funksiyalar
const UNIT_PRICE = 125.00;
let productQuantity = 0; // Məhsul bölməsində seçilən say
let cartCount = 0;        // Səbətdəki faktiki məhsul sayı

// Səbətin görünüşünü və qiymətini yeniləyən funksiya
function updateCart() {
    if (cartCount > 0) {
        emptyCartMessage.style.display = "none";
        CartRow.style.display = "flex";
        cartProductCount.textContent = cartCount;
        productPrice.textContent = `$${(UNIT_PRICE * cartCount).toFixed(2)}`;
    } else {
        emptyCartMessage.style.display = "flex";
        CartRow.style.display = "none";
        cartProductCount.textContent = "0";
        productPrice.textContent = "$0.00";
    }
}

// Sayı artırmaq (yalnız məhsul səhifəsindəki rəqəmi dəyişir)
plusButton.addEventListener("click", () => {
    productQuantity++;
    productCount.textContent = productQuantity;
});

// Sayı azaltmaq (yalnız məhsul səhifəsindəki rəqəmi dəyişir)
minusButton.addEventListener("click", () => {
    if (productQuantity > 0) {
        productQuantity--;
        productCount.textContent = productQuantity;
    }
});

// "Add to cart" düyməsinə basdıqda seçilən say səbətə əlavə olunur
addCartButton.addEventListener("click", () => {
    if (productQuantity > 0) {
        cartCount += productQuantity;
        updateCart();
    }
});

// Səbətdən məhsulu silmək düyməsi
deleteButton.addEventListener("click", () => {
    cartCount = 0;
    updateCart();
});
