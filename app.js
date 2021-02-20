// 1) знайти add to cart
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

// 2) знайти всі кнопки add to cart
let addToCartButtons = document.querySelectorAll(".add_to_cart");
// console.log(addToCartButtons);

// 3) цикл (в 1 рядок)
// for(let i = 0; i < addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener("click", function() {
//         productsCountEl.textContent = +productsCountEl.textContent +1;
//     })
// }

// 3) цикл (в 2 рядки)
// for(let i = 0; i < addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener("click", function() {
//         let prevProductsCount = +productsCountEl.textContent;
//         productsCountEl.textContent = prevProductsCount +1;
//     })
// }


//вдома цикл - через forEach (2 рядки)
// addToCartButtons.forEach(function(key, value) {
//     addToCartButtons[value].addEventListener("click", function() {
//         let prevProductsCount = +productsCountEl.textContent;
//         productsCountEl.textContent = prevProductsCount +1;
//     })
// })
//працює! ураааа! :)))

addToCartButtons.forEach(function(key, value) {
    addToCartButtons[value].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent +1;
    });
});


//***************** */
// д/з -> like button
let likeButton = document.querySelectorAll('.like')
// console.log(likeButton);

// метод for
// for(let i = 0; i < likeButton.length; i++) {
//     likeButton[i].addEventListener("click", function() {
//         this.style.backgroundImage = "url('images/heart\ white.png')";
//         this.style.backgroundColor = "#2c71b8";
//     })
// }

// метод forEach
likeButton.forEach(function(key, value) {
    likeButton[value].addEventListener("click", function likedHeart() {
        this.style.backgroundImage = "url('images/heart\ white.png')";
        this.style.backgroundColor = "#2c71b8";
    });
});

// let likeBackButton = document.getElementsByClassName('like');
let likeBackButton = document.querySelectorAll('.like');
// console.log(likeBackButton);
likeBackButton.forEach(function(key, value) {
    if (likeBackButton[value].hasAttribute('class="like"')) {
        likeButton[value].removeEventListener('click', likedHeart());
    }
});
//не працює