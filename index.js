/*
var number = document.querySelector("#number");
var randomValue = document.querySelector("#randomValue");

var i = 0;

function imageLoad() {
  const IMG_NUMBER = 4;
  var i = Math.random();
  console.log(Math.floor(i));
  document.querySelector("img").src = `image/${Math.floor(
    i * IMG_NUMBER + 1
  )}.jpg`;
}

function countUp() {
  // % //  나머지값
  var numberValue = i;
  var value = i % 10;
  switch (value) {
    case 0:
      imageLoad();
      var j = Math.random();
      var randomeValue = Math.floor(j * 1000);
      randomValue.innerText = `Random Value :  ${randomeValue}`;
  }
  if (i < 10) numberValue = `0${i}`;
  number.innerText = numberValue;

  i++; // 이 function이 끝난 후 + 1

  return i;
}

function init() {
  countUp();
}

init();

*/

/*

class Count {
  countNumber = document.querySelector("#countNumber");
  randomNumber = document.querySelector("#randomNumber");
  images = document.querySelector(".images");

  constructor(number1) {
    this.number1 = number1;
  }

  get click() {
    var a = this.addNumber();
    console.log(a);
    if (a % 10 === 0) {
      this.giveValue();
      this.showRandomImage();
    }
  }

  //method

  getNumber() {
    return ++this.number1;
  }

  addNumber() {
    var a = this.getNumber();
    this.countNumber.innerText = `0${a}`;

    if (a > 9) {
      this.countNumber.innerText = `${a}`;
    }
    return a;
  }

  randomValue() {
    var i = Math.random();
    return i;
  }

  giveValue() {
    var i = this.randomValue();
    var j = Math.floor(i * 1000);

    this.randomNumber.innerText = `Random Number : ${j}`;
  }

  showRandomImage() {
    var IMAGE_NUMBER = 4;
    var i = this.randomValue();
    var j = Math.floor(i * IMAGE_NUMBER);
    this.images.src = `image/${j + 1}.jpg`;
  }
}

const count = new Count(0);

// console.log(count.number2);
// get number ++

// 넘버를 선언 넘버를 더한다 넘버를 리턴한다.

*/
