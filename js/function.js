//Fonction pour formater le prix XX XXX 
let affichePrix = (prixEnvoi) => {
    prix = `${prixEnvoi}`;
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
let totalPanier = 0;
// monPanier.clear();


// Affichage de la pill
if (window.addEventListener){
    window.addEventListener("storage", onstorage, false);
    } else {
        window.addEventListener("storage", onstorage)
    }

    let pillOnStorage = function() {
        if (monPanier.length == 0){

        }else {
            let ajoutPill = document.getElementById('lienPanier');
        ajoutPill.innerHTML = `Panier <span class="badge badge-primary badge-pill badge-danger">${monPanier.length}</span>`;
        }
    }
