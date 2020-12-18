//Variables Globales
let url = `http://localhost:3000/api/cameras`;
let urlPanier =`./panier.html`;
let totalPanier = 0;

//organiser le panier avec un tableau dedans
let monPanier = localStorage;
if (monPanier.length ==0){
    let tableauPanier =[];
monPanier.setItem(0, JSON.stringify(tableauPanier));
}else {

};


//Afficher le contenu de local storage
    let produitJSON = monPanier[0];
    let produitDansPanier = produitJSON && JSON.parse(produitJSON);
    console.log(produitDansPanier);


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
            if (produitDansPanier.length == 0){
            }else {
            let ajoutPill = document.getElementById('lienPanier');
            let calculPill = 0;
            for(produit of produitDansPanier){
                calculPill += produit.qte;
            }
            ajoutPill.innerHTML = `Panier <span class="badge badge-primary badge-pill badge-danger">${calculPill}</span>`;
        }
    }


    // Bouton suppression
    let supression = function(){
        let boutonsSuppression = document.querySelectorAll('.suppression');
        for (lien of boutonsSuppression){
            idasupp = lien.addEventListener('click', event =>{
                produitDansPanier.splice(event.target.id, 1);
                monPanier.setItem(0, JSON.stringify(produitDansPanier));
                location.reload();
            });
        }
    }
    
    //Création class produit
    class Produit {
        constructor(id, nom, description, prix, qte, imgurl){
            this.id = id;
            this.nom = nom;
            this.description = description;
            this.prix = prix;
            this.qte = qte;
            this.imgurl = imgurl;
        }
    }
