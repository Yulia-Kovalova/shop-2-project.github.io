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

addToCartButtons.forEach(function (key, value) {
    addToCartButtons[value].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
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

for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function () {
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

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target === modal) {
        closeModal()
    }
})


// change product quantity

// let decrementBtns = document.querySelectorAll(".decrement-button") [0];
// let incrementBtns = document.querySelectorAll(".increment-button") [0];
// let productQuantity = document.querySelectorAll(".product-quantity input") [0];
// let currentCount = +productQuantity.value;

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(productQuantity);

// function toggleButtonState(count) {
//     decrementBtns.disabled = count <= 1;
//     incrementBtns.disabled = count >= 10;
// }

// toggleButtonState(currentCount);

// incrementBtns.addEventListener("click",function() {
//     let currentCount = +productQuantity.value;
//     let nextCount = currentCount + 1;
//     productQuantity.value = nextCount;

//     toggleButtonState(nextCount);
// })

// decrementBtns.addEventListener("click",function() {
//     let currentCount = +productQuantity.value;
//     let nextCount = currentCount - 1;
//     productQuantity.value = nextCount;

//     toggleButtonState(nextCount);
// })


// пробувала з допомогою Вікторії - не працює
// function toggleButtonState(count, num) {
//     decrementBtns[num].disabled = count <= 1;
//     incrementBtns[num].disabled = count >= 10;
// }

// for (let i = 0; i < productQuantity.length; i++) {
//     toggleButtonState(productQuantity[i].value, i);
// }

// for(let i=0;i<incrementBtns.length;i++){
//     incrementBtns[i].addEventListener("click", function () {
//         let currentCount = +productQuantity.value;
//         let nextCount = currentCount + 1;
//         productQuantity.value = nextCount;

//         toggleButtonState(nextCount);
//     })
// }

// for(let i=0;i<decrementBtns.length;i++){
//     decrementBtns[i].addEventListener("click", function () {
//         let currentCount = +productQuantity.value;
//         let nextCount = currentCount - 1;
//         productQuantity.value = nextCount;

//         toggleButtonState(nextCount);
//     })
// }
// не працює



// Розв'язок задачі з Ярославом на уроці 23
// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let productQuantity = document.querySelectorAll(".product-quantity input");

// for(let i=0; i<productQuantity.length; i++) {
//     let currentCount = +productQuantity[i].value;
//     toggleButtonState(currentCount, decrementBtns[i], incrementBtns[i]);
// }

// function toggleButtonState(count, decrementBtn, incrementBtn) {
//     decrementBtn.disabled = count <= 1;
//     incrementBtn.disabled = count >= 10;
// }

// for (let i = 0; i < incrementBtns.length; i++) {
//     incrementBtns[i].addEventListener("click", function () {
//         let currentCount = +productQuantity[i].value;
//         let nextCount = currentCount + 1;
//         productQuantity[i].value = nextCount;

//         toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i]);
//     })
// }

// for (let i = 0; i < decrementBtns.length; i++) {
//     decrementBtns[i].addEventListener("click", function () {
//         let currentCount = +productQuantity[i].value;
//         let nextCount = currentCount - 1;
//         productQuantity[i].value = nextCount;

//         toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i]);
//     })
// }


// Add slider slick
$(".slider-block").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
})


// Робота на уроці 23
// 
// let audi = {
//     color:"black",
//     year:"2011",
//     model:"A4",
// }

// let bmw = {
//     color:"grey",
//     year:"2015",
//     model:"320",
// }

// function Car(model,year,color) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     console.log(this)
// }

// const audi = new Car("A4",2010,"black");
// const bmw = new Car("320",2020,"grey")
// console.log(audi);
// console.log(bmw);

// function Calculator(a,b) {
//     this.a = a;
//     this.b = b;

//     this.sum = function() {
//         return this.a + this.b
//     }
//     this.mul = function() {
//         return this.a * this.b
//     }
// }

// let calc = new Calculator(2,15);
// let calc1 = new Calculator(10,10);
// console.log(calc.sum());
// console.log(calc.mul());
// console.log(calc1.sum());
// console.log(calc1.mul());


// class для конструктора = обгортка
// class Calculator {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;

//         this.sum = function () {
//             return this.a + this.b;
//         };
//         this.mul = function () {
//             return this.a * this.b;
//         };
//     }
// }


// OOP = object-oriented programming
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productQuantity = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    }
    this.toggleButtonState = function () {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    }
    this.toggleButtonState();

    this.increment = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState();
    }
    this.decrement = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState();
    }
    this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this));
}

const counters = [];

productQuantity.forEach((item,i) => (
    counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item)
))