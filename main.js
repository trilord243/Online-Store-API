const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const descripProduct = document.querySelector(".product-detail-2");

const buttonDescrSkip = document.querySelector(".product-detail-close");
//------------------------------------------------------------------//

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

buttonDescrSkip.addEventListener("click", skipDesc);

function skipDesc() {
  const isShopActive = aside.classList.contains("inactive");
  if (!isShopActive) {
    aside.classList.add("inactive");
  }
  descripProduct.classList.add("inactive");
}
function toggleDescription() {
  descripProduct.classList.remove("inactive");
}
function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  const isMobileMenyClosed = descripProduct.classList.contains("inactive");
  if (!isMobileMenyClosed) {
    descripProduct.classList.add("inactive");
  }
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isProductDetailClosed = descripProduct.classList.contains("inactive");

  if (!isProductDetailClosed) {
    descripProduct.classList.add("inactive");
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}
function openProductDetail() {}

//Llamar a un Api//

const URL = "https://api.escuelajs.co/api/v1/products";

const productList = async function () {
  const res = await fetch(URL);
  const data = await res.json();

  function renderProducts() {
    for (let i = 0; i < 20; i++) {
      const productCard = document.createElement("div");
      const img = document.createElement("img");
      img.addEventListener("click", toggleDescription);
      const productInfo = document.createElement("div");
      const productInfoDiv = document.createElement("div");
      const productName = document.createElement("p");
      const productPrice = document.createElement("p");
      const productfigure = document.createElement("figure");
      const imgFigure = document.createElement("img");

      img.setAttribute("src", data[i].category.image);
      imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
      productName.innerText = data[i].title;
      productPrice.innerText = "$" + data[i].price;
      productCard.classList.add("product-card");
      productInfo.classList.add("product-info");

      productfigure.appendChild(imgFigure);
      productInfoDiv.appendChild(productName);
      productInfoDiv.appendChild(productPrice);
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productfigure);
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
      cardsContainer.appendChild(productCard);
    }
  }
  renderProducts();
};

//const productList = [];
/* 
productList.push({
  name: "Byke",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Telefono",
  price: 350,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Carro",
  price: 3650,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computador",
  price: 650,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Mueble",
  price: 694200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
 */
/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> 
*/
/* function renderProducts(arr) {
  for (let i = 0; i < 20; i++) {
    const productCard = document.createElement("div");
    const img = document.createElement("img");
    img.addEventListener("click", toggleDescription);
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    const productfigure = document.createElement("figure");
    const imgFigure = document.createElement("img");

    img.setAttribute("src", arr[i].category.image);
    imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productName.innerText = arr[i].tittle;
    productPrice.innerText = "$" + arr[i].price;
    productCard.classList.add("product-card");
    productInfo.classList.add("product-info");

    productfigure.appendChild(imgFigure);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productfigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}
 */
productList();
