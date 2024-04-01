/** @format */

function createCarousel({
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  // 여기서 {}는 options이다
  // {} 덕분에 createCarousel() 이렇게 인자에 아무것도 전달하지 않아도 에러안뜸
  // ..some code
  return {
    margin,
    center,
    navElement,
  };
}

const tetst = createCarousel();
console.log(tetst);

function greet({ name = "World" } = {}) {
  console.log(`Hello, ${name}!`);
}

greet(); // 출력: Hello, World!
greet({ name: "John" }); // 출력: Hello, John!
