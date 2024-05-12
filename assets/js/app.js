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
const productDprice = document.querySelector('.product__Dprice');
const totalPrice = document.querySelector('.total__price');
const cartBox = document.querySelector('.cart__box');
const purchageBtn = document.querySelector('.purchage-btn');

let itemCount = 0;
productItems.forEach((item) => {
  item.addEventListener("click", function (e) {1
    itemCount += 1;
    let productName = this.children[1].children[1].innerText;
    let productPrice = +this.children[1].children[2].children[0].innerText;
    console.log(productName);
    console.log(productPrice);
    console.log(itemCount);
});
});
