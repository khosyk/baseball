//  --- USER ------

// 1. 유저 정보입력/숫자입력 2.던짐 3.던짐 수와 결과 계산 4. 아웃까지 반복//

// alert("9회말 마지막 방어 당신은 마무리 투수로 등판하게 됩니다.");

var userResult = document.querySelector("#user_result");

//---- number class

function randomValue() {
  var i = Math.random();
  var j = Math.floor(i * 10);
  return j;
}

class NUMBER {
  constructor(value) {
    this.value = value;
  }

  showNumber() {
    var i = randomValue();
    return i;
  }
}

//  --- PC number ------ ///

var pcResult = document.querySelector("#pc_result");

class PcFirstNumber extends NUMBER {}
class PcSecondNumber extends NUMBER {}
class PcThirdNumber extends NUMBER {}
class PcFourthNumber extends NUMBER {}

const PcFirstN = new PcFirstNumber();
const PcSecondN = new PcSecondNumber();
const PcThirdN = new PcThirdNumber();
const PcFourthN = new PcFourthNumber();

// --- score board -----

var scoreU = document.querySelector("#score_user_result");
var scoreP = document.querySelector("#score_pc_result");

const compareA = document.querySelector("#score_result_a");
const compareB = document.querySelector("#score_result_b");
const compareC = document.querySelector("#score_result_c");
const compareD = document.querySelector("#score_result_d");

function score() {
  /* userNumber();
  pcNumber();   */

  var e = PcFirstN.showNumber();

  var f = PcSecondN.showNumber();

  var g = PcThirdN.showNumber();

  var h = PcFourthN.showNumber();

  var p = `${e}  ${f}  ${g}  ${h}`;

  scoreP.innerText = p;
  pcResult.innerText = p;

  const a = document.querySelector("#user_result_A").value;
  const b = document.querySelector("#user_result_B").value;
  const c = document.querySelector("#user_result_C").value;
  const d = document.querySelector("#user_result_D").value;

  scoreU.innerText = `${a}  ${b}  ${c}  ${d}`;

  //!!!!! --- compare and show the result by color ---!!!!//

  ///-- result size changing fixed value --.///

  compareA.style.height = "30px";
  compareB.style.height = "30px";
  compareC.style.height = "30px";
  compareD.style.height = "30px";

  //----- result function -----//

  function comparisonStrike() {
    if (a == e) {
      compareA.style.background = "red";
      compareA.style.height = "83px";
    } else if (a == f || a == g || a == h) {
      compareA.style.background = "green";
    }

    if (b == f) {
      compareB.style.background = "red";
      compareB.style.height = "83px";
    } else if (b == e || b == g || b == h) {
      compareB.style.background = "green";
    }
    if (c == g) {
      compareC.style.background = "red";
      compareC.style.height = "83px";
    } else if (c == f || c == e || c == h) {
      compareC.style.background = "green";
    }
    if (d == h) {
      compareD.style.background = "red";
      compareD.style.height = "83px";
    } else if (d == f || d == g || d == e) {
      compareD.style.background = "green";
    }
  }
  comparisonStrike();
}

/// ----- Count score =-------///

var scoreMath = document.querySelector("#score_math");
var scoreCount = document.querySelector("#score_count");

/// ---- strike ---- ///

function strike() {
  var strike = 0;

  if (compareA.style.background == "red") {
    strike++;
  }

  if (compareB.style.background == "red") {
    strike++;
  }
  if (compareC.style.background == "red") {
    strike++;
  }
  if (compareD.style.background == "red") {
    strike++;
  }

  return strike;
}

var sumStrike = 0;

function countStrike() {
  if (compareA.style.background == "red") {
    sumStrike++;
  }
  if (compareB.style.background == "red") {
    sumStrike++;
  }
  if (compareC.style.background == "red") {
    sumStrike++;
  }
  if (compareD.style.background == "red") {
    sumStrike++;
  }

  if (sumStrike > 2) {
    alert("타자 아웃입니다! 당신의 승리입니다! :D 새 게임이 시작됩니다.");
    location.reload();
  }
  return sumStrike;
}

// -----ball -----///

function ball() {
  var ball = 0;
  if (compareA.style.background == "green") {
    ball++;
  }
  if (compareB.style.background == "green") {
    ball++;
  }

  if (compareC.style.background == "green") {
    ball++;
  }

  if (compareD.style.background == "green") {
    ball++;
  }

  return ball;
}

var sumBall = 0;

function countBall() {
  if (compareA.style.background == "green") {
    sumBall++;
  }
  if (compareB.style.background == "green") {
    sumBall++;
  }

  if (compareC.style.background == "green") {
    sumBall++;
  }

  if (compareD.style.background == "green") {
    sumBall++;
  }

  if (sumBall > 3) {
    alert(
      "타자가 출루했습니다. 당신의 패배입니다... :(  새 게임이 시작됩니다."
    );
    location.reload();
  }
  return sumBall;
}

function colorMath() {
  scoreMath.innerText = `스트라이크 : ${strike()} 볼 : ${ball()}`;
  scoreCount.innerText = `스트라이크 : ${countStrike()} 볼 : ${countBall()}`;
}

//// ------ init -----

var throwing = document.querySelector("#user_throw");

throwing.addEventListener("click", init, false);

function init() {
  window.alert("공을 던졌습니다!");
  score();
  colorMath();
}
