//Fonction pour formater le prix XX XXX 
let affichePrix = (tableauProduit) => {
    let prix = tableauProduit.price;
    prix = `${prix}`;
    finPrix = prix.slice(-3);
    debutPrix = prix.replace(finPrix, '');
    prix = debutPrix + " " + finPrix;
    return prix;
}

//Fonction pour ajouter des versions du produit
let afficheVersions = (tableauProduit) => {
    let txt ='';
    for(let versions of tableauProduit.lenses){
        txt +=`<option value="${versions}">${versions}</option>`;
        
    }
    return txt;
}

let url = `http://127.0.0.1:3000/api/cameras`;
let monPanier = localStorage;
// monPanier.clear();


// Affichage de la pill
if (window.addEventListener){
    window.addEventListener("storage", onstorage, false);
    } else {
        window.addEventListener("storage", onstorage)
    }

    let pillOnStorage = function() {
        let ajoutPill = document.getElementById('lienPanier');
        ajoutPill.innerHTML = `Panier <span class="badge badge-primary badge-pill">${monPanier.length}</span>`;
        console.log(ajoutPill);
    }
