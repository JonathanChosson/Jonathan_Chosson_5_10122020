let affichePrix = (tableauProduit) => {
    let prix = tableauProduit.price;
    prix = `${prix}`;
    finPrix = prix.slice(-3);
    debutPrix = prix.replace(finPrix, '');
    prix = debutPrix + " " + finPrix;
    console.log(prix);
    return prix;
}

let url = `http://127.0.0.1:3000/api/cameras`;


