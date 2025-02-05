
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const img1 = document.querySelector("#img1")
const price = document.querySelector("#price")

function btnChange1() {
  event.preventDefault()
  img1.src = "./imgs/product/100ml.avif"
  btn1.style.borderBottom = "1px solid black";
  btn2.style.borderBottom = "none";
  btn3.style.borderBottom = "none";
  price.textContent = "₩235,000"
}


function btnChange2() {
  event.preventDefault()
  img1.src = "./imgs/product/30ml.avif"
  btn1.style.borderBottom = "none"
  btn2.style.borderBottom = "1px solid black";
  btn3.style.borderBottom = "none";
  price.textContent = "₩85,000"
}

function btnChange3() {
  event.preventDefault()
  img1.src = "./imgs/product/50ml.avif"
  btn1.style.borderBottom = "none"
  btn2.style.borderBottom = "none";
  btn3.style.borderBottom = "1px solid black";
  price.textContent = "₩135,000"
}


function btnChange4() {
  event.preventDefault()
  img1.src = "./imgs/product/100ml.avif"
  btn1.style.borderBottom = "1px solid black";
  btn2.style.borderBottom = "none";
  btn3.style.borderBottom = "none";
  price.textContent = "₩235,000"
}

function btnChange5() {
  event.preventDefault()
  img1.src = "./imgs/product/30ml.avif"
  btn1.style.borderBottom = "none"
  btn2.style.borderBottom = "1px solid black";
  btn3.style.borderBottom = "none";
  price.textContent = "₩85,000"
}

function btnChange6() {
  event.preventDefault()
  img1.src = "./imgs/product/50ml.avif"
  btn1.style.borderBottom = "none"
  btn2.style.borderBottom = "none";
  btn3.style.borderBottom = "1px solid black";
  price.textContent = "₩135,000"
}

btn1.addEventListener("click", btnChange1)
btn2.addEventListener("click", btnChange2)
btn3.addEventListener("click", btnChange3)
btn4.addEventListener("click", btnChange4)
btn5.addEventListener("click", btnChange5)
btn6.addEventListener("click", btnChange6)