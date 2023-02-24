"use strict";


// let show = console.log.bind(console)

// show(document);




// let elems = document.getElementsByTagName("h1");

// for (const elem of elems) {
//   console.log(elem);
// }


// let elems = document.getElementById("product");

// console.log(elems);




// let span = document.querySelector("#product span");

// let text = document.querySelector("#product .item p");

// console.log(text);



// let thirdSpan = document.querySelector("#product span:nth-child(3)");
// let spans = document.querySelectorAll("#product span");

// console.log(spans);

// for (const item of spans) {

//   if (item.innerText == "Bye3") {
//     item.style.color = "red";
//   }
// }




// let elem = document.querySelector("h2");

// elem.innerText = "Welcome";

// console.log(elem.innerHTML);

// elem.innerHTML = "<span>Resulllllll</span>";


// elem.style.backgroundColor = "yellow";
// elem.style.position = "relative";
// elem.style.top = "200px";


// elem.style.cssText = `
//   background-color:yellow;
//   position: relative;
//   top:200px;
// `;



// let h1 = document.querySelector("h1");

// console.log(h1);

// h1.className = "test";

// h1.classList.add("test");

// h1.classList.remove("header");

// console.log(h1.classList.contains("header"));


// let button = document.querySelector("#products button");

// let h1 = document.querySelector("#products h1");

// button.onclick = function(){
//   alert("salam1");
// }

// button.onclick = function(){
//   alert("sagol");
// }


// function test() {
//   alert("test function");
// }


// button.addEventListener("click",test)
// button.addEventListener("click",function(){
//   alert("salam2");
// })

// button.addEventListener("click", function () {
//   // h1.className = "h1-design";
//   h1.classList.add("h1-design");
// })




// let h1 = document.querySelector("#products h1");
// let btnOff = document.querySelector("#products .off");
let btnOn = document.querySelector("#products .on");
let icon = document.querySelector("#products i");
let body = document.querySelector("body");



// btnOn.addEventListener("click", function () {

//   if (h1.classList.contains("inActive")) {
//     h1.classList.remove("inActive");
//   }
//   h1.classList.add("active");
// })

// btnOff.addEventListener("click", function () {
//   h1.classList.add("inActive");

//   if (h1.classList.contains("active")) {
//     h1.classList.remove("active");
//   }
// })




// btnOn.addEventListener("click", function (event) {
// console.log(event.target);

//   if (icon.classList.contains("active") && body.classList.contains("active-body")) {
//     icon.classList.remove("active");
//     body.classList.remove("active-body");
//     this.innerText = "On";
//     this.style.backgroundColor = "green";
//   } else {
//     icon.classList.add("active");
//     body.classList.add("active-body");
//     this.innerText = "Off";
//     this.style.backgroundColor = "red";
//   }
// })


// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Resul");
// });


// btnOff.addEventListener("click", function () {
//   icon.classList.remove("active");
//   body.classList.remove("active-body");
// })


// console.log(btnOn);
// console.log(btnOff);



// icon.addEventListener("mouseover", function () {
//   icon.classList.add("active");
//   body.classList.add("active-body");
// this.innerText = "On";
// this.style.backgroundColor = "green";
// })



// icon.addEventListener("mouseout", function () {
//   icon.classList.remove("active");
//   body.classList.remove("active-body");
// this.innerText = "Off";
// this.style.backgroundColor = "red";
// })




let input = document.querySelector("#products input")
let button = document.querySelector("#products button")
let ul = document.querySelector("#products ul")

// console.log(input.value);

// document.querySelector("#products h1").innerText = input.value;

// <li class="list-group-item my-1">salam</li>


button.addEventListener("click", function () {
  // console.log(input.value);
  // input.value = "";

  // ul.innerHTML += `<li class="list-group-item my-1">${input.value}</li>`;


  // if (!!!input.value) {
  //   alert("Don't empty");
  //   return;
  // }


  let inputValue = input.value;

  if (input.value == "") {
    alert("Don't empty");
    return;
  }



  // let strArr = [];

  // strArr(inputValue);

  let list = document.querySelectorAll("#products ul li");

  for (const item of list) {
    if (item.innerText == inputValue) {
      alert("Item already exist");
      input.value = "";
      return;
    }
  }




  let li = document.createElement("li");

  li.className = "list-group-item my-1";

  li.innerText = inputValue;

  ul.append(li);


  input.value = "";
})










