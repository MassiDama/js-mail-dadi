// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.


// creazione array di una lista email
const listEmail = ["m.dama@outlook.it", "m.croci@outlook.it", "aquila@gmail.it" , "c.cardellini@outlook.it", "massitarta@gmail.it" ];

// selezione input dell'email user
const emailUser = document.querySelector(".user-email");

// selezione bottone invio dati 
const sendButton = document.getElementById("genera-dati");

let nuovaEmail;

sendButton.addEventListener("click",

    function() {
        
        let esitoEmail = "La tua Email non è tra i registrati, ci dispiace!";

        for (let i = 0; i < listEmail.length; i++) {

            nuovaEmail = emailUser.value;

            let emailItem = listEmail[i];

            if (nuovaEmail === emailItem) {
               
                esitoEmail = "La tua mail è registrata. Sei pronto a passare una serata che non dimenticherai facilmente?!";
            
            }

        }
        
        document.querySelector(".esito-controllo").innerHTML = esitoEmail
        console.log(esitoEmail);
    }
);





