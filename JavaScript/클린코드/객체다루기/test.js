/** @format */

const orders = ["First", "Second", "Third"];

const st = orders[0];
const rd = orders[2];

// const [first, ,third] // 이거 가능 Second 빼고 담김

const { 0: st2, 2: rd2 } = orders; // 이렇게도 가능 오호 index로 접근하는듯

console.log(st2);
