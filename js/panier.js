pillOnStorage();
if(produitDansPanier.length > 0){
    for (produitPanier of produitDansPanier){
        let listePanier = document.getElementById('produitPanier');
        let positionProduit = produitDansPanier.indexOf(produitPanier);
        let prix = affichePrix(produitPanier.prix);
        listePanier.innerHTML += `
        <tr>
            <td class="w-25">
                <img src="${produitPanier.imgurl}" class="img-fluid img-thumbnail" alt="...">
            </td>
            <td>
                <p>${produitPanier.nom}</p>
            </td>
            <td>
                <p>${prix} €</p>
            </td>
            <td>
                <p>${produitPanier.qte}</p>
            </td>
            <td>
            <a href="#" class="suppression" id="${positionProduit}"><span class="fas fa-trash-alt text-danger" id="${positionProduit}"></span></a>
            </td>
        </tr>
        `;
        //calcul et affiche le prix total du panier
        let prixTotal = document.getElementById('prixTotal');
        totalPanier += produitPanier.prix;
        totalPanierAffichage = affichePrix(totalPanier);
        prixTotal.innerHTML = `${totalPanierAffichage} €`;
    }
    supression();
}else{
    let panierVide = document.getElementById('panierVide');
    panierVide.innerHTML =`
    <div class="col text-center">
        <p>Votre Panier semble vide</p>
        <img src="./images/add_to_cart.webp" alt="Panier vide" class="img-fluid" />
    </div>
    `;
}

