//tarification des billets

function TicketPrix(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "âge invalide";
    }
}

// Partie utilisateur 
let age = prompt("Veuillez saisir votre âge :");
age = parseInt(age, 10);

if (!isNaN(age) && age >= 0) {
    let prix = TicketPrix(age);
    console.log(`Le prix est ${prix}$`);
} else {
    console.log("âge invalide.");
}


