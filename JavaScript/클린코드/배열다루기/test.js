/** @format */

// JavaScript의 배열은 객체다
// const arr = [1, 2, 3];
// arr[3] = "test";
// arr["property"] = "sting value";
// arr["obj"] = {};
// arr[{}] = [1, 2, 3];

// arr["func"] = function () {
//   return "hello";
// };
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr);
// console.log(arr.func());
// for문 안에서는 1,2,3,test까지만 출력되고
// console.log(arr) 하면 전부나온다
// 신기하게 함수는 정상작동한다

// 아래 객체랑 걍 거의 같음 ;;

// const obj = {
//   arr: [1, 2, 3],
//   3: "test",
//   property: "sting value",
//   obj: {},
//   "{}": [1, 2, 3],
//   func: function () {
//     return "hello";
//   },
// };

// console.log(obj);

// 참고로 ㄹㅇ 배열인거 확인하려면 Array.isArray()가 좋다.
// length? 문자열도 됨 ㅅㄱ

// console.log(Array.isArray(arr));

// const arr = [1, 2, 3];
// console.log(arr.length); // => 3

// arr.length = 10;
// console.log(arr.length); // => 10
// console.log(arr);

// const arr = [1, 2, 3];

// function abc(input) {
//   const [firstInput, secondInput] = input;
//   console.log(input);
//   console.log(firstInput, secondInput);
// }
// abc(arr);

// 불변성
// const originArray = [1, 2, 3, 4, 5];

// const newArrary = originArray;

// originArray.push(11);
// originArray.push(12);
// originArray.push(13);
// originArray.pop();

// console.log(newArrary);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// function outerFunction() {
//   const innerFunction = () => {
//     console.log(this); // outerFunction의 this를 가리킵니다.
//   };
//   innerFunction();
// }

// outerFunction();

const original = { a: 1, b: 2 };
const copied = { ...original };
copied.a = 3;
console.log(original.a); // 1
