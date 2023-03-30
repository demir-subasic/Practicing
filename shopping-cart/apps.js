//varijabla koja ce sabrati cene svega sto smo stavili u korpu
let allTotal = 0;




//Funckija za dodavanje elemenata
addToCart = (element) => {
    //Selektovanje varijabli
    let mainEl = element.closest(".single-item");
    let price = mainEl.querySelector('.price').textContent;
    let name = mainEl.querySelector("h3").textContent;
    let quantity = mainEl.querySelector("input").value;
    let cartItems = document.querySelector(".cart-items");


    //Uslov da ne moze dodati 0 kolicinu
    if(parseInt(quantity) > 0) {
       
        //da uklonimo znak $ sa price
        price = price.substring(1);


        //total je jednak mnozenju price i quantity koje smo pretvorili u number
        let total = parseInt(price) * parseInt(quantity);
       
        //Da se na all total dodaje i stara vrednost na novu
        allTotal += total;


        //Dodaje stvari koje smo odabrali i selektuje one koje ce ispisati
        cartItems.innerHTML += `<div class = "cart-single-item">
                                   <h3>${name}</h3>
                                   <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                   <button onclick="removeFromCart(this)" class = "remove-item">Ukloni</button>
                                </div>`;
 
        //Selektovali smo all total i sta ce ispisati u njega
        document.querySelector(".total").textContent = `Total: $${allTotal}`


        //Da se tekst dugmeta promeni nakon klika
        element.textConent = "Dodato";


        //Disable-amo dugme posle pritiska
        element.setAttribute("disabled", "true");
    } else {
        alert("Odaberi kolicinu")
    }
}


//Funkcija koja ce pritiskom na button ukloniti ono sto smo pre dodali
removeFromCart = (element) => {
    //Selektovanje varijabli
   let mainEl = element.closest('.cart-single-item');
   let price = mainEl.querySelector("p span").textContent;
   let name = mainEl.querySelector("h3").textContent;
   let vegetables = document.querySelectorAll(".single-item");


    price = parseInt(price);


    //Oduzimamo od all total price
    allTotal -= price;


    //Ispisujemo u all total onu cifru koju smo dobili
    document.querySelector(".total").textContent = `Total: $${allTotal}`;


    mainEl.remove();
   


    //Pravimo petlju da prodjemo kroz svaki clan
    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').textContent;
      if(itemName === name) {
        //Vracamo vrednost na nulu
        vege.querySelector(".actions input").value = 0;
        //Deaktiviramo disabled
        vege.querySelector(".actions button").removeAttribute('disabled');
        //Vracamo da opet na dugme pise "dodaj"
        vege.querySelector(".actions button").textContent = "Dodaj";
      }
    })
}
