//Variables Globales
let url = `http://localhost:3000/api/cameras`;
let urlPanier =`./panier.html`;
let monPanier = localStorage;
let totalPanier = 0;

// monPanier.clear();

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


    // Bouton suppression
    let supression = function(){
        let idSuppr =location.search.substring(5);
        if(idSuppr != ''){
            console.log(idSuppr);
            console.log(monPanier);
            monPanier.removeItem(idSuppr);
            location.assign(urlPanier);
        }else {
        }
        ;
    }
    


