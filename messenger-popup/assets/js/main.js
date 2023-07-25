/*
cach 2-- them 1 event vao DOM
*/ 
// B1 : truy cap phan tu
const click2 = document.querySelector(".btn2-js");
// console.log(click2);

// B2 : goi den phuong thuc thuc thi
click2.onclick = function() {
  handleShow2();
}
// dinh nghia function handleShow2 xu ly su kien khi nguoi dung click vao button

const handleShow2 = () => {
  alert("helo 500 ae web36");
}




/* cach 3*/
//b1 truy cap phan tu
const btn3 = document.querySelector(".btn3-js");
// console.log(btn3);

// b2 dinh nghia handleShow3
const handleShow3 = () => {
  alert("hello world");
}
// b3 them su kien onckick()cho phan tu
btn3.addEventListener("click", handleShow3);


// btn3.addEventListener("click", () => {
//   alert("hello world 123");
// });




/* mousedown*/
// b1 truy cap phan tu
const btn4 = document.querySelector(".btn4-js");
// console.log(btn4);
btn4.addEventListener("mousemove", () => {
  alert("hello world 123");
});


/* event*/
const btn5 = document.querySelector(".btn5-js");
// console.log(btn5);
btn5.addEventListener("click", (e) => {
  console.log(e); //lay toa do
});









/*==== keyboard ====*/

document.addEventListener("keydown", (event) => {
  // alert("hello");
  console.log(event.key);
  alert(event.key);
});




























//  xu ly logic popup-messenger
// b1 truy cap phan tu button
const btnMess = document.querySelector(".btn-mess");
// console.log(btnMess);

const boxContent = document.querySelector(".box-content");
// console.log(boxContent);

const close = document.querySelector(".close");
// console.log(close);


let isStatus = false;  // bien trang thai


/* === cach 1 ====*/ 


// b2 them su kien vao nut btnMess (BUTTON)
// btnMess.addEventListener("click", () => {
//   // alert("hello world 123");

//   isStatus = !isStatus;   //cong tac den

//   if (isStatus == false) {
//     boxContent.style.bottom = "-500px";
//   boxContent.style.transition = "0.3s";
//   }
//   else {
//     boxContent.style.bottom = "120px";
//     boxContent.style.transition = "0.3s";
//   }


//   // boxContent.style.bottom = "120px";
//   // boxContent.style.transition = "0.3s";
//   console.log(isStatus);
// });

// console.log(isStatus);

// close.addEventListener("click", () => {
//   // alert("hello world");
//   boxContent.style.bottom = "-500px";
//   boxContent.style.transition = "0.3s";
// });


/*=== cach 2 ===*/
btnMess.addEventListener("click", () => {
  // alert("1");
  boxContent.style.transition = "0.3s";
  boxContent.classList.toggle("change-show");
});

close.addEventListener("click", () => {
  boxContent.classList.remove("change-show");
  boxContent.style.transition = "0.0s";
});



// toggle() : cong tac den