let clickCount = 0;

let p = document.createElement('p');
p.innerHTML  = 'Anda telah menekan gambar kucing sebanyak <span id="counter">0</span> kali';
document.body.appendChild(p);

function changeImage() {
    let image = document.getElementById("catImage");
    let imageText = document.getElementById("catCaption");

    image.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
    imageText.innerHTML = "<em>Tiga Anak Kucing</em>";
}

let catImage = document.getElementById("catImage");

catImage.addEventListener('click', function(event) {
    clickCount++;
    let numberCount = document.getElementById("counter");
    numberCount.innerHTML = clickCount;
});

const cacheKey = "NUMBER";
if (typeof(Storage) !== "undefined") { /* Session Storage */
    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if (sessionStorage.cacheKey === "undefined") {
        sessionStorage.setItem(cacheKey, 0);
    }
}