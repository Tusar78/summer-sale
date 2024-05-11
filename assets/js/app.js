// Toogle Button
const toggleBtn = document.querySelector('.toggle-btn');
const cartInfo = document.querySelector('.product__carts');

toggleBtn.addEventListener('click', function() {
    let icon = toggleBtn.children[0];
    if(icon.className == 'fa-solid fa-bars') {
        icon.className = 'fa-solid fa-xmark';
        cartInfo.style.display = 'block';
    } else {
        icon.className = 'fa-solid fa-bars';
        cartInfo.style.display = 'none';
    }
})