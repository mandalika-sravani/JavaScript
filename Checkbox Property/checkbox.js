// .checked --- property that determines the checked state of an 
//              HTML checkbox or radio button element

const subCheck = document.getElementById("myCheckbox");
const radVisa = document.getElementById("visaBtn");
const radMaster = document.getElementById("masterBtn");
const radPay = document.getElementById("paypalBtn");

const submit = document.getElementById("myButton");

const subResult = document.getElementById("subresult");
const cardResult = document.getElementById("cardresult");

submit.onclick = function() {
    if(subCheck.checked) {
        subResult.textContent = "You are subscribed!";
    }
    else {
        subResult.textContent = "You are NOT subscribed!";
    }

     if(radVisa.checked) {
        cardResult.textContent = "You are paying with VISA"
        }
        else if(radMaster.checked) {
            cardResult.textContent = "You are paying with MASTER CARD"
        }
        else if(radPay.checked) {
            cardResult.textContent = "You are paying with PAYPAL"
        }
        else {
            cardResult.textContent = "You did not selected any payment method"
        }
    
}
