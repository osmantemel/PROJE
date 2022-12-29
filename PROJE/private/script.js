// data bas:
let toplamPara = 0;
let urunler = [
  {
    id: "1",
    urunAdi: "html",
    fiyat: 25,
    urunAcıklama: "HTML ŞABLON KODLARI",
  },
  {
    id: "2",
    urunAdi: "python",
    fiyat: 35,
    urunAcıklama: "PYTHON ŞABLON KODLARI",
  },
  {
    id: "3",
    urunAdi: "js",
    fiyat: 45,
    urunAcıklama: "JS ŞABLON KODLARI",
  },
  {
    id: "4",
    urunAdi: "python",
    fiyat: 50,
    urunAcıklama: "PYTHON ŞABLON KODLARI",
  },
  {
    id: "5",
    urunAdi: "java",
    fiyat: 85,
    urunAcıklama: "JAVA ŞABLON KODLARI",
  },
  {
    id: "6",
    urunAdi: "csarp",
    fiyat: 10,
    urunAcıklama: "C# ŞABLON KODLARI",
  },
  { id: "8", urunAdi: "js", fiyat: 25, urunAcıklama: "JS ŞABLON KODLARI" },
  {
    id: "9",
    urunAdi: "python",
    fiyat: 35,
    urunAcıklama: "PYTHON ŞABLON KODLARI",
  },
  { id: "10", urunAdi: "js", fiyat: 25, urunAcıklama: "JS ŞABLON KODLARI" },
  {
    id: "11",
    urunAdi: "css",
    fiyat: 79,
    urunAcıklama: "CSS ŞABLON KODLARI",
  },
  {
    id: "12",
    urunAdi: "java",
    fiyat: 80,
    urunAcıklama: "JAVA ŞABLON KODLARI",
  },
  {
    id: "13",
    urunAdi: "python",
    fiyat: 5,
    urunAcıklama: "PYTHON ŞABLON KODLARI",
  },
  {
    id: "14",
    urunAdi: "csarp",
    fiyat: 19,
    urunAcıklama: "C# ŞABLON KODLARI",
  },
  {
    id: "15",
    urunAdi: "csarp",
    fiyat: 27,
    urunAcıklama: "C# ŞABLON KODLARI",
  },
  {
    id: "16",
    urunAdi: "css",
    fiyat: 38,
    urunAcıklama: "CSS ŞABLON KODLARI",
  },
];
// data son
// sepet elemanları bas

let sepetElemanlari = [
  {
    id: 0,
    urunAdi: "",
    fiyat: 0,
    urunAciklama: "",
  },
];

// sepet elemanları son

// ürünleri anaSayfaya ekleme bas
let ul = document.getElementById("urunlerim");
for (let index of urunler) {
  let li = ` <li class="urun">
  <img src="../resimler/${index.urunAdi}.png" alt="">
  <p><a onclick="urunDetaylari(${index.id})">${index.urunAcıklama}</a></p>
  <p class="fiyat">${index.fiyat} $</p>
  <button type="button" onclick="sepetEkle(${index.id})" 
  id="btn-sepetEkle">SEPETE EKLE</button>
  </li>`;
  ul.insertAdjacentHTML("beforeend", li);
}
// ürünleri anaSayfaya ekleme son

//arama kısmı bası:
let aranacakText = document.getElementById("txtTaskName");
document.getElementById("btnAra").addEventListener("click", function () {
  ul.innerHTML = "";
  for (let index in urunler) {
    if (urunler[index].urunAdi == aranacakText.value) {
      let li = ` <li class="urun">
        <img src="../resimler/${urunler[index].urunAdi}.png" alt="">
        <p><a onclick="urunDetaylari(${urunler[index].id})">${urunler[index].urunAcıklama}</a></p>
        <p class="fiyat">${urunler[index].fiyat} $</p>
        <button type="button" onclick="sepetEkle(${urunler[index].id})" 
        id="btn-sepetEkle">SEPETE EKLE</button>
        </li>`;
      ul.insertAdjacentHTML("beforeend", li);
    } else if (aranacakText.value == "") {
      ul.innerHTML = "";
      for (let index of urunler) {
        let li = ` <li class="urun">
        <img src="../resimler/${index.urunAdi}.png" alt="">
        <p><a onclick="urunDetaylari(${index.id})">${index.urunAcıklama}</a></p>
        <p class="fiyat">${index.fiyat} $</p>
        <button type="button" onclick="sepetEkle(${index.id})" 
        id="btn-sepetEkle">SEPETE EKLE</button>
        </li>`;
        ul.insertAdjacentHTML("beforeend", li);
      }
    }
  }
});
//arama kısmı son.

// sepet kısmı bas:
let ulSepet = document.getElementById("ulSepet");
function sepetEkle(id) {
  if (sepetElemanlari.length < 6) {
    for (let index of urunler) {
      if (index.id == id) {
        let liSepet = `<li>
            <img src="../resimler/${index.urunAdi}.png" alt="" />
            <p>${index.urunAcıklama}</p>
            <p class="fiyat">${index.fiyat}$</p>
            <button onClick="sepetSil(${index.id},${index.fiyat})">sil</button>
            </li>`;
        sepetElemanlari.push({
          id: index.id,
          urunAdi: index.urunAdi,
          fiyat: index.fiyat,
          urunAciklama: index.urunAcıklama,
        });
        ulSepet.insertAdjacentHTML("beforeend", liSepet);
        toplamPara = index.fiyat + toplamPara;
      }
    }
  } else {
    alert("TEK SEFERDE 5'DEN FAZLA ÜRÜN ALAMAZSINIZ !!!");
  }

  console.log(toplamPara);
}
// sepet kısmı son:
// document.getElementsByClassName("aciklama").onclick(console.log("osman"));

function urunDetaylari(i) {
  console.log(i);
  for (let index of urunler) {
    if (index.id == i) {
      console.log(index.id);
      let detay = `  <div class="urunBilgileri" id="urunBilgileri">
            <div style="position: relative">
            <div class="baslik"><h1>"${index.urunAcıklama}"</h1></div>
            <div class="kapatmaTusu">
            <a onclick="kapatmaTusu()"  style="color: black">
            <i class="fa-solid fa-circle-xmark"></i
            ></a>
            </div>
                <div id="ürünDetaylari">
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta
                cumque eos debitis blanditiis minima quae inventore dolore quo
                aliquid velit iste, aspernatur voluptatem adipisci dolorum
                laudantium minus voluptatibus! Repudiandae? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veritatis architecto asperiores
                laudantium vitae tenetur porro, nesciunt dolore quo aliquid velit
                iste, aspernatur voluptatem adipisci dolorum laudantium minus
                voluptatibus! Repudiandae? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veritatis architecto asperiores laudantium vitae
                tenetur porro, nesciunt quibusdam, incidunt blanditiis non, dolores
                impedit? Perferendis harum ratione officiis impedit magnam iste
                temporibus.
                </p>
                <br />
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta
                cumque eos debitis blanditiis minima quae inventore dolore quo
                aliquid velit iste, aspernatur voluptatem adipisci dolorum
                laudantium minus voluptatibus! Repudiandae? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veritatis architecto asperiores
                laudantium vitae tenetur porro, nesciunt quibusdam, incidunt
                blanditiis non, dolores impedit? Perferendis harum ratione officiis
                impedit magnam iste temporibus.
                </p>
                <br />
                </div>
            </div>
            <button type="button" onclick="sepetEkle(${index.id})" id="btn-sepetEkle">
            SEPETE EKLE
            </button>
            </div>
            `;

      document.getElementById("pencere").insertAdjacentHTML("beforeend", detay);
    }
  }
  document.getElementById("urunBilgileri").style.display = "block";
}

function kapatmaTusu() {
  document.getElementById("urunBilgileri").style.display = "none";
  document.getElementById("pencere").innerHTML = "";
}
//sepetten silme bası:
function sepetSil(id, fiyat) {
  let deletedId;
  for (let index in sepetElemanlari) {
    if (sepetElemanlari[index].id == id) {
      deletedId = index;
      toplamPara = toplamPara - sepetElemanlari[index].fiyat;
    }
  }
  sepetElemanlari.splice(deletedId, 1);
  ulSepet.innerHTML = "";
  for (let im of sepetElemanlari) {
    console.log(im);
    sepetEkleme(im.id);
  }
  let sepetTutari = document.getElementById("sepetAciklama");
  sepetTutari.innerHTML = "";
  sepetTutar();
}
// sepeten silme sonu

function sepetEkleme(id) {
  for (let index of urunler) {
    if (index.id == id) {
      let liSepet = `<li>
          <img src="${index.urunAdi}.png" alt="" />
          <p>${index.urunAcıklama}</p>
          <p class="fiyat">${index.fiyat}$</p>
          <button onClick="sepetSil(${index.id})">sil</button>
          </li>`;
      ulSepet.insertAdjacentHTML("beforeend", liSepet);
    }
  }
}

function sepetlink() {
  document.getElementById("ulSepet").style.display = "block";
  document.getElementById("sepetAciklama").style.display = "block";
  sepetTutar();
}
function OnClick() {
  document.getElementById("ulSepet").style.display = "none";
  document.getElementById("sepetAciklama").style.display = "none";
}

function sepetTutar() {
  let sepetTutari = document.getElementById("sepetAciklama");
  sepetTutari.innerHTML = `<p> SEPET TUTARI: ${toplamPara}$</p> <button>SEPETİ ONAYLA</button> `;
}
