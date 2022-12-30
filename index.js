//bài 1
document.getElementById("check").onclick = function () {
  let txtStandardGrade = +document.getElementById("txtStandardGrade").value;
  let txtSubject1 = +document.getElementById("txtSubject1").value;
  let txtSubject2 = +document.getElementById("txtSubject2").value;
  let txtSubject3 = +document.getElementById("txtSubject3").value;
  let area = document.getElementById("area").value;
  let type = document.getElementById("type").value;
  let totalGrade = 0;
  let areaGrade = 0;
  let typeGrade = 0;

  switch (area) {
    case "A":
      areaGrade = 2;
      break;

    case "B":
      areaGrade = 1;
      break;

    case "C":
      areaGrade = 0.5;
      break;
    default:
      break;
  }
  switch (type) {
    case "1":
      typeGrade = 2.5;
      break;

    case "2":
      typeGrade = 1.5;
      break;
    case "3":
      typeGrade = 1;
      break;
    default:
      break;
  }
  totalGrade = txtSubject1 + txtSubject2 + txtSubject3 + areaGrade + typeGrade;
  if (
    txtSubject1 > 0 &&
    txtSubject2 > 0 &&
    txtSubject3 > 0 &&
    totalGrade >= txtStandardGrade
  ) {
    document.getElementById("result1-wrapper").style.display = "block";
    document.getElementById("result1").innerHTML =
      "đậu, với số điểm " + totalGrade;
  } else {
    document.getElementById("result1-wrapper").style.display = "block";
    document.getElementById("result1").innerHTML =
      "rớt, với số điểm " + totalGrade;
  }
};

//bài 2
document.getElementById("bill").onclick = function () {
  let number = +document.getElementById("number").value;
  let name = document.getElementById("name").value;
  let bill = 0;
  if (number <= 50) {
    bill = number * 50;
  } else {
    if (number <= 100) {
      bill = 50 * 50 + (number - 50) * 100;
    } else {
      if (number <= 150) {
        bill = 50 * 50 + 50 * 100 + (number - 100) * 200;
      } else {
        if (number >= 201) {
          bill = 50 * 50 + 50 * 100 + 100 * 200 + (number - 200) * 350;
        }
      }
    }
  }
  document.getElementById("result2-wrapper").style.display = "block";
  document.getElementById("result2").innerHTML =
    "tổng tiền điện của khách hàng " + name + " là " + bill + " đồng";
};
//bài 3
document.getElementById("Vat").onclick = function () {
  let tongtien = +document.getElementById("tongtien").value;
  let nguoiphuthuoc = +document.getElementById("nguoiphuthuoc").value;
  let hoten = document.getElementById("hoten").value;
  let thunhapchiuthue = tongtien - 4e6 - nguoiphuthuoc * 1.6e6;
  if (thunhapchiuthue < 0) thunhapchiuthue = 0;
  let thue = 0;

  if (thunhapchiuthue <= 60e6) thue = 0.05;
  else if (thunhapchiuthue <= 120e6) thue = 0.1;
  else if (thunhapchiuthue <= 210e6) thue = 0.15;
  else if (thunhapchiuthue <= 384e6) thue = 0.2;
  else if (thunhapchiuthue <= 624e6) thue = 0.25;
  else if (thunhapchiuthue <= 960e6) thue = 0.3;
  else thue = 0.35;
  let tongthue = thunhapchiuthue * thue;
  document.getElementById("result3-wrapper").style.display = "block";
  document.getElementById("result3").innerHTML =
    hoten + " phải đóng tiền thuế thu nhập cá nhân " + tongthue + " VND";
};
//bài 4

function myFunction() {
  let x = document.getElementById("mySelect");
  let output = document.getElementById("output");
  x.addEventListener("change", function () {
    if (x.value === "doanhnghiep") {
      // chỗ này do anh xài class của bs nên anh phải thêm 1 bước remove cái class block nữa thì class none nó mới ăn đc
      // này là cách 1: xài class bs phải có thêm bước remove do bị đè css
      // output.classList.add("d-block");
      // output.classList.remove("d-none");

      // cách 2: sử dụng css inline, cách 2 phải xóa class d-none bên html, do code của bs xài important code mình ko đè đc mà anh phải css cho nó
      output.style.display = "block";
    } else if (x.value === "canhan") {
      // document.getElementById("output").style.display = "none";
      // output.classList.add("d-none");
      // output.classList.remove("d-block");

      output.style.display = "none";
    }
  });
}
myFunction();
document.getElementById("bill2").onclick = function () {
  let mySelect = document.getElementById("mySelect").value;
  let sokenh = document.getElementById("sokenh").value;
  let soketnoi = document.getElementById("soketnoi").value;
  let makh = document.getElementById("makh").value;
  let phixulyhoadon = 0;
  let phidichvucoban = 0;
  let phithuekenhcaocap = 0;
  let tiencap = 0;
  switch (mySelect) {
    case "doanhnghiep":
      phixulyhoadon = 15;
      if (soketnoi <= 10) phidichvucoban = 75;
      else phidichvucoban = (soketnoi - 10) * 5 + 75;
      phithuekenhcaocap = sokenh * 50;
      break;

    case "canhan":
      phixulyhoadon = 4.5;
      phidichvucoban = 20.5;
      phithuekenhcaocap = sokenh * 7.5;
      break;
    default:
      break;
  }
  tiencap = phixulyhoadon + phithuekenhcaocap + phidichvucoban;

  document.getElementById("result4-wrapper").style.display = "block";
  document.getElementById("result4").innerHTML =
    "tiền cáp của khách hàng mã " + makh + " là " + tiencap + "$";
};
