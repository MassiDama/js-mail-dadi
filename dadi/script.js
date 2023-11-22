// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generare numero random user
const numeroUser = Math.floor(Math.random() * 6);

console.log("Il numero generato per l'utente user è: ", numeroUser);

// generare numeri random pc
const numeroPc = Math.floor(Math.random() * 6);

console.log("Il numero generato dal pc è: ", numeroPc);

if (numeroUser > numeroPc) {

    console.log("Il vincitore è l'utente");

} else {

    console.log("Il vincitore è il pc");
}