// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// Ketika search form di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

// Ketika shopping cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchbutton = document.querySelector("#search-button");
const shoppingcart = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchbutton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingcart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal box
const ItemDetailModal = document.querySelector("#item-detail-modal");
const ItemDetailButtons = document.querySelectorAll(".item-detail-button");

ItemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    ItemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  ItemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik close di modal diluar elemen
window.onclick = (e) => {
  if (e.target == ItemDetailModal) {
    ItemDetailModal.style.display = "none";
  }
};
