//Fonction pour formater le prix XX XXX 
let affichePrix = (tableauProduit) => {
    let prix = tableauProduit.price;
    prix = `${prix}`;
    finPrix = prix.slice(-3);
    debutPrix = prix.replace(finPrix, '');
    prix = debutPrix + " " + finPrix;
    console.log(prix);
    return prix;
}

//Fonction pour ajouter des versions du produit
let afficheVersions = (tableauProduit) => {
    let txt ='';
    for(let versions of tableauProduit.lenses){
        console.log(tableauProduit.lenses)
        console.log(versions)
        txt +=`<option value="${versions}">${versions}</option>`;
        console.log(txt);
        
    }
    return txt;
}

let url = `http://127.0.0.1:3000/api/cameras`;


