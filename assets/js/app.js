// Toogle Button
const toggleBtn = document.querySelector(".toggle-btn");
const cartInfo = document.querySelector(".product__carts");

toggleBtn.addEventListener("click", function () {
  let icon = toggleBtn.children[0];
  if (icon.className == "fa-solid fa-bars") {
    icon.className = "fa-solid fa-xmark";
    cartInfo.style.display = "block";
  } else {
    icon.className = "fa-solid fa-bars";
    cartInfo.style.display = "none";
  }
});

// All neccessary reference for cart
const productItems = document.querySelectorAll(".product__item");
const totalProductPrice = document.querySelector(".product__Tprice");
const productDiscount = document.querySelector(".product__Dprice");
const totalAmmount = document.querySelector(".total__price");
const cartBox = document.querySelector(".cart__box");
const purchageBtn = document.querySelector(".purchage-btn");
const cuponField = document.querySelector(".coupon__field");
const cuponBtn = document.querySelector(".coupon__btn");

let itemCount = 0;
let totalPrice = 0;
let discountPrice = "0";
let mainTotal = "0";
productItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    1;
    itemCount += 1;
    let productName = this.children[1].children[1].innerText;
    let productPrice = +this.children[1].children[2].children[0].innerText;

    // Total Product Price
    totalPrice += productPrice;
    totalProductPrice.innerText = totalPrice;

    // Total Price
    mainTotal = totalPrice - discountPrice;
    totalAmmount.innerText = mainTotal;
  });
});

cuponField.addEventListener("keyup", function (e) {
  const DISCOUNT = 20;

  if (e.target.value == "SELL200" && totalPrice >= 200) {
    discountPrice = (totalPrice * DISCOUNT) / 100;
    cuponBtn.removeAttribute("disabled");
    // Total Price
    mainTotal = totalPrice - discountPrice;
    totalAmmount.innerText = mainTotal;
  } else {
    cuponBtn.setAttribute("disabled", "true");
    discountPrice = "0"
    mainTotal = totalPrice - discountPrice;
    totalAmmount.innerText = mainTotal;
  }

  productDiscount.innerText = discountPrice;
});
