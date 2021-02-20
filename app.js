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
// let likeButton = document.querySelectorAll('.like')
// console.log(likeButton);

// метод for
// for(let i = 0; i < likeButton.length; i++) {
//     likeButton[i].addEventListener("click", function() {
//         this.style.backgroundImage = "url('images/heart\ white.png')";
//         this.style.backgroundColor = "#2c71b8";
//     })
// }

// метод forEach
// likeButton.forEach(function(key, value) {
//     likeButton[value].addEventListener("click", function likedHeart() {
//         this.style.backgroundImage = "url('images/heart\ white.png')";
//         this.style.backgroundColor = "#2c71b8";
//     });
// });

// let likeBackButton = document.getElementsByClassName('like');
// let likeBackButton = document.querySelectorAll('.like');
// // console.log(likeBackButton);
// likeBackButton.forEach(function(key, value) {
//     if (likeBackButton[value].hasAttribute('class="like"')) {
//         likeButton[value].removeEventListener('click', likedHeart());
//     }
// });
//не працює

/***************************/
//Робота на уроці 21 - додавання та забирання like

// let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns)

// for(let i =0; i <likeBtns.length; i++) {
//     likeBtns[i].addEventListener("click",function() {
//         if(this.classList.contains("liked")) {
//             this.classList.remove("liked")
//         } else {
//             this.classList.add("liked")
//         }
//     })
// }


//************************* */
// Метод classList.toggle
let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns)

for(let i =0; i <likeBtns.length; i++) {
    likeBtns[i].addEventListener("click",function() {
        this.classList.toggle("liked")
});
};



//************************* */
// Відкривати вікно для More Details

// modal
// let moreDetailsBtns = document.querySelectorAll(".more_details");
// console.log(moreDetailsBtns);

// for(let i =0; i < moreDetailsBtns.length; i++) {
//     moreDetailsBtns[i].addEventListener("click", function() {
//         this.classList.add("show");
//     });
// };
//не працює


// Рішення Людмили Аркавенко
// let moreDetailsBtns = document.querySelectorAll(".button-more-details");
// console.log(moreDetailsBtns);
// let modalWindow = document.querySelector(".modal");
// for(i=0;i<moreDetailsBtns.length;i++)
// {
//     moreDetailsBtns[i].addEventListener('click',function()
//     {
//         modalWindow.classList.add("show");
//     })
// }
// let closeModalWindow = document.querySelector(".modal-close-btn");
// closeModalWindow.addEventListener('click',function()
// {
//     modalWindow.classList.remove("show");
// })
//не працює


//рішення Ярослава через forEach
let moreDetailsBtns = document.querySelectorAll(".more_details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

moreDetailsBtns.forEach(btn => (
    btn.addEventListener("click", openModal)
))

closeBtn.addEventListener("click", closeModal)

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
    console.log(e.target)
    if(e.target===modal) {
        closeModal()
    }
})