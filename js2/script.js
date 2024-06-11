//alert("merhaba esra");
//console.log("merhaba esra");
//let isim = prompt("isminizi giriniz");
//document.write(isim);

function hesapla() {
  let boy = prompt("Boyunuzu giriniz");
  let kilo = prompt("Kilonuzu giriniz");
  let sonuc = (kilo / (boy * boy)) * 10000;

  let endexresult = document.getElementById("endexresult");
  let endextext = document.getElementById("endextext");
  let endeximg = document.getElementById("endeximg");

  endexresult.innerHTML = "Sonuc: " + sonuc.toFixed(2);
  endeximg.style.width = "250px";
  if (sonuc < 18.5) {
    endextext.innerHTML = "Zayıf";
    endeximg.src = "zayif.png";
    endextext.style.color = "purple";
  } else if (sonuc < 25) {
    endextext.innerHTML = "Normal";
    endeximg.src = "normal.png";
    endextext.style.color = "green";
  } else if (sonuc < 30) {
    endextext.innerHTML = "Fazla Kilolu";
    endeximg.src = "kilolu.png";
    endextext.style.color = "orange";
  } else {
    endextext.innerHTML = "Obez";
    endeximg.src = "obez.png";
    endextext.style.color = "red";
  }
}
