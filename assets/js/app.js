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
const popupHome = document.querySelector(".popup__home");
const popupWrap = document.querySelector(".popup-wrap");

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
    itemCount += 1;
    let productName = this.children[1].children[1].innerText;
    let productPrice = +this.children[1].children[2].children[0].innerText;
    let cartItem = document.createElement("p");
    cartItem.className = "carts__item";
    cartItem.innerText = `${itemCount}. ${productName}`;
    cartBox.append(cartItem);

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

    if (totalPrice >= 200) {
      cuponBtn.removeAttribute("disabled");
    } else {
      cuponBtn.setAttribute("disabled", "true");
    }
  });
});

// Apply Cupon Button
cuponBtn.addEventListener("click", (e) => {
  // Discount Calculation
  const DISCOUNT = 20;
  if (cuponField.value === CUPON) {
    discountPrice = (totalPrice * DISCOUNT) / 100;
    productDiscount.innerText = parseFloat(discountPrice).toFixed(2);
  }

  priceCalulation(mainTotal, totalPrice, discountPrice, totalAmmount);
});

// Completation
purchageBtn.addEventListener("click", (e) => {
  popupWrap.style.display = "flex";
});

// Go to Home
popupHome.addEventListener("click", (e) => {
  e.target.parentNode.parentNode.style.display = "none";
  location.href = "https://tus-summer-sale.netlify.app/";
});


// Small GSAP
const timeLine = gsap.timeline();
console.log(timeLine);

timeLine.from(".hero__subtext", {
  display: 'block',
  y: 20,
  opacity: 0,
  delay: 1,
  duration: 0.5,
})

timeLine.from(".hero__title", {
  display: 'block',
  y: 20,
  opacity: 0,
  duration: 0.5,
})
timeLine.from(".hero__promo", {
  display: 'block',
  y: 20,
  opacity: 0,
  duration: 0.5,
})
timeLine.from(".hero__thumb", {
  display: 'block',
  y: 20,
  opacity: 0,
  duration: 0.5,
})

// gsap.from(".product__list .product__item", {
//   opacity: 0,
//   y: 40,
//   duration: 1,
//   stagger: 0.75,
//   scrollTrigger: {
//     trigger: '.product__list .product__item',
//     scroller: 'body',
//     start: 'top 50%',
//     scrub: 2,
//   }
// })

// gsap.from(".product__coupon", {
//   opacity: 0,
//   x: 400,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.product__coupon',
//     scroller: 'body',
//     start: 'top 50%'
//   }
// })

// gsap.from(".sticky-div", {
//   opacity: 0,
//   x: 400,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.product__coupon',
//     scroller: 'body',
//     start: "top 50%"
//   }
// })