let broj = prompt("Unesite vasu sifru");


if (broj.length <= 4) {
    console.log("Sifra je kratka");
}
else if (broj.length > 10) {
    console.log("Sifra je preduga");
}
else {
    console.log("Uspesno ste kreirali sifru");
}