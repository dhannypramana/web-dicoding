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

/*
Function Approach

    function count() {
    clickCount++;
    let numberCount = document.getElementById("counter");
    numberCount.innerHTML = clickCount;
    console.log(clickCount);
}
*/

/* Listener Approach*/

let catImage = document.getElementById("catImage");

catImage.addEventListener('click', function(event) {
    clickCount++;
    let numberCount = document.getElementById("counter");
    numberCount.innerHTML = clickCount;
});