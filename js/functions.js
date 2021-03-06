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
    console.log(sessionStorage);

let viderPanier =() => {
    monPanier.clear();
} 

//Fonction pour formater le prix XX XXX 
let affichePrix = (prixEnvoi) => {
    prix = `${prixEnvoi}`;
    finPrix = prix.slice(-3);
    finPrix = finPrix.slice(0,2);
    debutPrix = prix.replace(prix.slice(-3), '');
    prix = debutPrix + "," + finPrix;
    return prix;
}

//calcul et affiche le prix total du panier
let afficheTotalPanier = () => {
    if(produitPanier.qte >1){
        totalProduit = produitPanier.qte * produitPanier.prix;
        totalPanier += totalProduit;
    }else{
        totalPanier += produitPanier.prix;
    }
    
    totalPanierAffichage = affichePrix(totalPanier);
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
        //implémentation id du pdt dans la modale
        let tableauCorbeille = document.querySelectorAll('.corbeille');
        for (boutonCorbeille of tableauCorbeille){
            boutonCorbeille.addEventListener('click', event =>{
                console.log(event.target);
                modalId= document.querySelector('.suppression');
                modalId.innerHTML = `<span id="${event.target.id}">Supprimer</span>`;
            });
        }
        let boutonsSuppression = document.querySelectorAll('.suppression');
        for (lien of boutonsSuppression){
                lien.addEventListener('click', event =>{
                produitDansPanier.splice(event.target.id, 1);
                monPanier.setItem(0, JSON.stringify(produitDansPanier));
                location.reload();
            });
        }
    }

    //ajout Produit
    let plusProduit = function(){
        let boutonsAjout = document.querySelectorAll('.plusQte');
        for (ajout of boutonsAjout){
            ajout.addEventListener('click', event=>{
                produitDansPanier[event.target.id].qte ++;
                monPanier.setItem(0, JSON.stringify(produitDansPanier));
                location.reload();
            })
        }
    }

    //moins Produit
    let moinsProduit = function(){
        let boutonsretrait = document.querySelectorAll('.moinsQte');
        for (retrait of boutonsretrait){
            retrait.addEventListener('click', event=>{
                produitDansPanier[event.target.id].qte --;
                monPanier.setItem(0, JSON.stringify(produitDansPanier));
                location.reload();
            })
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
