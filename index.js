let rumus = Math.random() * 6; // angka 0-5

let AngkaAcak1 = Math.floor(rumus) + 1; // angka 1-6

let gambarDadu = "dadu" + AngkaAcak1 + ".png"; //dice1.png - dice6.png

let gambarAcakDadu = "images/" + gambarDadu; //images/dice1.png - images/dice6.png

let gambar1 = document.querySelectorAll("img")[0];

gambar1.setAttribute("src", gambarAcakDadu);

let angkaAcak2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dadu" + angkaAcak2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (AngkaAcak1 > angkaAcak2) {
  document.querySelector("h1").innerHTML = "🚩  Pemain 1 menang!";
} else if (angkaAcak2 > AngkaAcak1) {
  document.querySelector("h1").innerHTML = "Pemain 2 menang! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw (seimbang)!";
}
