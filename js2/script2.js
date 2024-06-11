/*index3.html
let random = Math.random(); //random numara üretir 0 dan 1e kadar
let min = Math.min(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //en küçük sayıyı bulur
let max = Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //en büyük sayıyı bulur
let round = Math.round(3.5); //sayıyı yuvarlar
*/
function hesapmakinasi() {
  let hesapmakinasi = document.getElementById("hesapmakinasi");
  hesapmakinasi.style.display = "none";
  let hesapmakinasiDurum = false;
}
function hesapla() {
  let inputhesap = document.getElementById("inputhesap");
  let sonuc = eval(inputhesap.value);
  inputhesap.value = sonuc;
}
function uyeekle() {
  // uyeler adında bir array oluşturulacak içerisine 3 tane obje eklenecek
  // içinde isim kullanıcı adı email ve cinssiyet bilgisi olacak
  // bu array içindeki objeleri tablo içerisinde listeleyecek
  let uyeler = [
    {
      isim: "Ali",
      kullaniciadi: "ali123",
      email: "ali@gmail.com",
      phone: "+905555555555",
    },
    {
      isim: "Ayşe",
      kullaniciadi: "ayse123",
      email: "ayse@gmail.com",
      phone: "+905555555555",
    },
    {
      isim: "Mehmet",
      kullaniciadi: "mehmet123",
      email: "mehmet@gmail.com",
      phone: "+905555555555",
    },
  ];
  let tablo = document.querySelector(".alldata3");
  let html = "";
  for (let i = 0; i < uyeler.length; i++) {
    html += `
    <tr>
    <td>${i + 1}</td>
      <td>${uyeler[i].isim}</td>
      <td>${uyeler[i].kullaniciadi}</td>
      <td>${uyeler[i].email}</td>
      <td>${uyeler[i].phone}</td>
    </tr>
    `;
  }
  tablo.innerHTML = html;
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn-basla").addEventListener("click", function () {
    var yazi = "Merhaba sınıf nasılsınız";
    setTimeout(function () {
      document.querySelector(".yaz1").innerHTML = yazi;
    }, 3000);
  });
  let sayi = 0;
  document.querySelector(".btn-basla2").addEventListener("click", function () {
    setInterval(function () {
      sayi++;
      document.querySelector(".yaz2").innerHTML = sayi;
    }, 1000);
  });
});
function fetchuserdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      let tablo = document.querySelector(".alldata3");
      let html = "";
      data.forEach((element) => {
        html += `
        <tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.username}</td>
          <td>${element.email}</td>
          <td>${element.phone}</td>
        </tr>
        `;
      });
      tablo.innerHTML = html;
    });
}
function fetchdata() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let tablo = document.querySelector(".alldata2");
      let html = "";
      data.forEach((element) => {
        html += `
        <tr>
          <td>${element.id}</td>
          <td>${element.title}</td>
          <td>${element.body}</td>
        </tr>
        `;
      });
      tablo.innerHTML = html;
    });
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".gelAll").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let tablo = document.querySelector(".alldata");
        let html = "";
        data.forEach((element) => {
          html += `
          <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
          </tr>
          `;
        });
        tablo.innerHTML = html;
      });
  });
});
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn").addEventListener("click", function () {
    let bTag = document.querySelector("b");
    alert(bTag.innerText);
  });
});
