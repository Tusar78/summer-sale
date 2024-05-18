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

// Set variables
let itemCount = 0;
let totalPrice = 0;
let discountPrice = "0";
let mainTotal = "0";
const CUPON = "SELL200";

// Total Price Calculator
const priceCalulation = (mainTotal, totalPrice, discountPrice, elem) => {
  mainTotal = totalPrice - discountPrice;
  elem.innerText = mainTotal;
};

// All OF ITEMs
productItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    1;
    itemCount += 1;
    let productName = this.children[1].children[1].innerText;
    let productPrice = +this.children[1].children[2].children[0].innerText;

    // Total Product Price
    totalPrice += productPrice;
    totalProductPrice.innerText = totalPrice;
    priceCalulation(mainTotal, totalPrice, discountPrice, totalAmmount);

    // Make purchase Button Should be enable
    if (totalAmmount.innerText > 0) {
      purchageBtn.removeAttribute("disabled");
    } else {
      purchageBtn.setAttribute("disabled", "true");
    }
  });
});

cuponField.addEventListener("keyup", function (e) {
  if (e.target.value === CUPON && totalPrice >= 200) {
    cuponBtn.removeAttribute("disabled");
  } else {
    cuponBtn.setAttribute("disabled", "true");
  }
});

// Apply Cupon Button
cuponBtn.addEventListener("click", (e) => {
  // Discount Calculation
  const DISCOUNT = 20;
  discountPrice = (totalPrice * DISCOUNT) / 100;
  productDiscount.innerText = discountPrice;

  priceCalulation(mainTotal, totalPrice, discountPrice, totalAmmount);
  cuponField.value = "";
});
