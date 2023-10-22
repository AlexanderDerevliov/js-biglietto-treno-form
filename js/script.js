
// chiedere all'utente il suo nome 
const userNameInput = document.getElementById("user-name");

// Chiedere all'utente quanti kilometri deve percorrere
const userKmInput = document.getElementById("kilometers")
console.log(userKmInput, typeof userKmInput);

// Chiedere all'utente la sua età
const userAgeInput = document.getElementById("user-age");
console.log(userAgeInput, typeof userAgeInput);

// Submit per generare la risposta
const submitBtn = document.getElementById("submit");
const deleteBtn = document.getElementById("delete");


// Al click sul bottone submit
submitBtn.addEventListener("click", function () {

    //valori degli input
    const userName = userNameInput.value;
    console.log(userName);

    const userKm = userKmInput.value;
    console.log(userKm);
    
    const userAge = userAgeInput.value;
    console.log(userAge);
    
    const price = userKm * 0.21;
    console.log(price);
    
    // percentuali di sconto

    let discountPercentage = 0;

    if (userAge < 18) {
    discountPercentage = 20;
    document .getElementById (`discount`) .innerHTML = `Congratulazioni, ha lo sconto riservato agli under 18 del 20%`;

    } else if (userAge >= 65) 
    
    { discountPercentage = 40;
      document .getElementById (`discount`) .innerHTML = `Congratulazioni, ha lo sconto riservato agli over 65 del 40%`;
    

    }else 
        
        { discountPercentage = 0;
        document .getElementById (`discount`) .innerHTML = `Ci dispiace, non ha diritto a nessun tipo di sconto`;
    }

    console.log(discountPercentage);


    let finalPrice = price - (price * discountPercentage / 100);
    finalPrice = finalPrice.toFixed(2)
    console.log(finalPrice);
   
//    messaggio finale 
    document .getElementById (`name`) .innerHTML = `Ciao ${userName}`;
    document .getElementById (`result`) .innerHTML = `Il prezzo finale del suo biglietto è: ${finalPrice} euro`;
  
 });

  
//   bottone cancellazione

 deleteBtn.addEventListener("click", function () {

    //valori degli input
    const userName = userNameInput.value;
    console.log(userName);

    const userKm = userKmInput.value;
    console.log(userKm);
    
    const userAge = userAgeInput.value;
    console.log(userAge);



        // Pulizia degli l'input
        userNameInput.value = "";
        userKmInput.value = "";
        userAgeInput.value = "";
     });
    