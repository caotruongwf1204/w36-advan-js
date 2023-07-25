// const fnA = () => {
//     setTimeout(() => {
//         // logic thuc thi o day
//         console.log("cong viec 1 het 0.5s")
//     }, 500);
// };

// const fnB = () => {
//     setTimeout(() => {
//         console.log("cong viec 2 duoc thuc thi")
//     }, 2000);
// };



// fnA();
// fnB();
// console.log("123");
//tong thoi gian chay = tong thoi gian cau fnA() va fnB()





// Thực hiện đồng thời các công việc
// const work1 = () => {
//   console.log("lam bai tap xong");
// };
// const work2 = () => {
//   console.log("da bong xong");
// };
// const work3 = () => {
//   console.log("nau com xong");
// };

// work1();
// work2();
// work3();























// Mô tả về hoạt đồng hằng ngày thu hien dong bo
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)
// 7. xem phim (7s)



// const doWork1 = (name, callback) => {
//   console.log("thuc hien cong viec ");
//   console.log("thu hien cong viec " + name);
//   // console.log(callback);
//   // thoi gian thuc thi cong viec , va lam cong viec khac
//   setTimeout(() => {
//     callback();
//   }, 3000);
// };

// const doWork2 = (name, callback) => {
//   console.log("thuc hien cong viec " + name);
//   setTimeout(() => {
//     callback();
//   }, 4000);
// };

// const doWork3 = (name, callback) => {
//   console.log("thuc hien cong viec " + name);
//   setTimeout(() => {
//     callback();
//   }, 5000);
// };

// const doWork4 = (name, callback) => {
//   console.log("thuc hien cong viec " + name);
//   setTimeout (() => {
//     callback();
//   }, 7000);
// };

// const ketthuc = () => {
//   console.log("ket thuc chuong trinh");
// };

// doWork1("lam bai tap", () => {
//   doWork2("da bong", () => {
//     doWork3("nau com", () => {
//       doWork4("xem phim", ketthuc);
//     });
//   });
// });


















/*========promise : loi hua =============*/
// let money = 40;

// // tao ra loi hua 1 ==> cong viec 1
// let buyIphone = new Promise((resolve, reject) => {       //resolve:loi hua duoc thu hien reject : loi hua khong duoc thuc hien
//   if (money > 35 ) {
//     resolve("du tien mua iphone day!");
//   }
//   else {
//     reject("kiem them tien di");
//   };
// });


// // tao ra loi hua 2 ==> cong viec 2
// let buyIpad = new Promise((resolve, reject) => {
//   if ((money - 35 - 3)  >= 0 ) {
//     resolve("du tien mua ipad roi !!");
//   }else {
//     reject("ngheo chay tui roi !!");
//   }
// })
// // thuc thi loi hua
// buyIphone
//   .then((response) => {  //loi hua duoc thuc hien thanh cong
//   console.log(response);

//   // thuc thi loi hua 2
//   return buyIpad;
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log("di ve nha thoi");
// });

// buyIpad
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })














/*=======async function=========*/

// const fnA = async() => {
//   return Promise.reject("sai roi day");
// };

// fnA();

// fnA()
//   .then((res) => {
//     console.log(res);
//     console.log("1");
//   }).catch((err) => {
//     console.log(err);
//     console.log("2");
//   })









// const fnB = async() => {
//   return "hello world"
// };

// fnB()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });







/*=====await====*/

// b1 truy cap phan tu 
// const HTML = document.querySelector("#await-js");
// console.log(HTML);


// const show = async() => {
//   let myPromise = new Promise((resolve, reject) => {
//   return resolve("web 36");
//   })
//   HTML.innerHTML = await myPromise;

// };
// show();









/*await setTimeout*/

// const poppupAlert = async() => {
//   let timeOutPromise = new Promise((resolve, reject) => {
//     setTimeout (() => {
//       resolve("hello");
//     }, 3000);
//   });

//   const result = await timeOutPromise
//   alert(result);

// };
// poppupAlert();












/* call API tu sever */

// fetch(); phuong thuc goi tu chuong trinh cua minh len sever (API)


// axios; 

// c1 call API
// const getApi = () => {
//   // thuc hien 1 loi goi 
//   const res = axios.get('https://fakestoreapi.com/products/')

//   res
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };
// thuc thi fuction getApi()
// getApi();



// c2 dung async/await getApi

const getApi2 = async() => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products/')
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getApi2();