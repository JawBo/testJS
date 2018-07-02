 
// // var prenom = prompt ("Comment tappelles-tu?");
// // var humeur = prompt("Comment vas-tu ?");

// // alert("Tu t'appelles " + prenom + " et tu vas " + humeur );

// var age = Number(prompt('Quel âge as-tu ? '));

// if(age <= 25 ){
//     alert(' Tu es jeune ! ')
// }
// else if( age > 25) { 
//     alert('Tu es un adulte')

// }
// else if(age >50) {
//     alert('Vous êtes à un âge avancé')
// }
// else {
//     alert('INtroduire un âge correct')
// }

// var confirme = confirm('appuie sur ok')

// if(confirme) {
//     alert('Welcome')
// }
// else {
//     alert('AU revoir');
//     close()
// }

alert('Hello World');
var humeur = prompt("Comment allez-vous aujourd'hui?");
var prenom = prompt("Quel est votre prénom ?");
alert("Vous vous appelez " + prenom + " et vous allez " + humeur)

var age = prompt("Quel est votre âge ?")
if (age < 18) {
    alert("Vous êtes mineur")
}
else if ( age >= 18) {
    alert("Vous êtes majeur")
}
var mois = prompt("Vous êtes né quel mois de l'année ?")

switch (mois) {
    case "Janvier" : 
    alert("Tu es né en Janvier");
break;
case "Février" : 
    alert("Tu es né en Fevrier");
break;
case "Mars" : 
    alert("Tu es né en Mars");
break;
case "Avril" : 
    alert("Tu es né en Avril");
break;
case "Mai" : 
    alert("Tu es né en Mai");
break;
case "Juin" : 
    alert("Tu es né en Juin");
break;
case "Juillet" : 
    alert("Tu es né en Juillet");
break;
case "Aout" : 
    alert("Tu es né en Aout");
break;
case "Septembre" : 
    alert("Tu es né en Septembre"); 
break;
case "Octobre" : 
    alert("Tu es né en Octobre");
break;
case "Novembre": 
    alert("Tu es né en Novembre");
break;
case "Décembre" : 
    alert("Tu es né en Décembre");
break;
default : 
alert("Je n'ai pas compris")
}


switch (mois) {
    case  "Février":
    case "Mars" :
    case "Avril":
    alert("Tu es né au Printemps");
break;

case "Mai", "Juin", "Juillet", "Aout" : 
    alert("Tu es né en Été");
break;

case "Septembre", "Octobre" : 
alert("Tu es né en Automomne")

case "Novembre", "Décembre", "Janvier" : 
    alert("Tu es né en Hiver");
break;

default : 
alert("Je n'ai pas compris")
}