var main = data.main;
var id = 0;
var type = "";
const dic = {};
dic["a"] = 0;
dic["b"] = 0;
dic["c"] = 0;
dic["d"] = 0;

function getData(id, type = "") {
  for (key in data.main) {
    const d = data.main[key];
    if (d.type != null) {
      if (d.type == type && d.id == id) {
        return d;
      }
    } else if (d.id == id) {
      return d;
    }
  }
  return null;
}

function setId(_id) {
  id = _id;
  updateUI();
}

function showSelection() {
  for (key in dic) {
    console.log(key, dic[key]);
  }
}

function getType() {
  var first = "";
  var second = "";

  if (dic["a"] > dic["b"]) {
    first = "a";
  } else {
    first = "b";
  }

  if (dic["c"] > dic["d"]) {
    second = "c";
  } else {
    second = "d";
  }

  type = first + second;
  console.log("currentType : ", type);
  return type; // a, b, c, d 값에 따라 type (ac ad bc bd) 결정
}

function updateUI() {
  var d = getData(id, getType());
  if (d == null) return;

  var text_area = document.getElementById("main_text");
  text_area.innerHTML = d.text;

  var img = document.getElementById("img_area");
  img.src = "./img/" + d.img;

  for (var i = 0; i < d.선택지.length; i++) {
    const s = d.선택지[i];
    var b = document.getElementById("q" + (i + 1));
    b.style.display = "block";
    b.innerHTML = s.text; //선택지 값 띄워주세요
  }
  for (var i = d.선택지.length; i < 4; i++) {
    var b = document.getElementById("q" + (i + 1));
    b.style.display = "none";
    b.innerHTML = ""; //선택지 없는, 나머지 q영역은 안 보이게
  }
}

function onButtonClick(index) {
  const curr = getData(id, getType());
  const type = curr.선택지[index].type;
  if (dic.hasOwnProperty(type)) {
    dic[type] += 1;
  } else {
    dic[type] = 1;
  } // 버튼 누르면 dic이라는 구조체에 선택한 값이 들어갑니다

  if (curr.next) {
    setId(curr.next);
  } else {
    // goto curr.선택지[0].next;
    window.location.href = curr.선택지[index].next;
  }

  showSelection(); //console에서 중간에 결과값 확인 가능. 디버깅
}

function onButton1Click() {
  onButtonClick(0);
}
function onButton2Click() {
  onButtonClick(1);
}
function onButton3Click() {
  onButtonClick(2);
}
function onButton4Click() {
  onButtonClick(3);
}

window.onload = function () {
  setId(1); //함수 첫 시작
};

document.getElementById("main_text").innerHTML = "a <br/> b";
