pillOnStorage();
fetch(url)
    .then((reponse) => 
    reponse.json()
    .then((data) => {
        if(monPanier.length !== 0){
            for(tableauProduit of data){
                console.log(tableauProduit);
                let listePanier = document.getElementById('produitPanier');
                    for (let listeProduit = 0; listeProduit < monPanier.length; listeProduit ++){
                        idProduit = monPanier.getItem(listeProduit);
                        console.log(idProduit);
                        console.log(tableauProduit._id);
                        if(idProduit == tableauProduit._id){
                            console.log(tableauProduit.price);
                            let prix = affichePrix(tableauProduit.price);
                            console.log(idProduit);
                            listePanier.innerHTML += `
                            <tr>
                                <td class="w-25">
                                    <img src="${tableauProduit.imageUrl}" class="img-fluid img-thumbnail" alt="...">
                                </td>
                                <td>
                                    <p>${tableauProduit.name}</p>
                                </td>
                                <td>
                                    <p>${prix} €</p>
                                </td>
                            </tr>
                            `;
                            let prixTotal = document.getElementById('prixTotal');
                            totalPanier += tableauProduit.price;
                            totalPanierAffichage = affichePrix(totalPanier);
                            prixTotal.innerHTML = `${totalPanierAffichage} €`;
                        }
                    }
            }
        }else{
            listePanier.innerHTML =`
                <div class="col text-center">
                    <p>Votre Panier semble vide</p>
                    <img src="./images/add_to_cart.webp" alt="Panier vide" class="img-fluid" />
                </div>
                `;
        }
    })
).catch(erreur => console.log('erreur : ' + erreur));

// console.log(monPanier);
// monPanier.setItem('idDuPdt', 'qte');
// console.log(monPanier);
// monPanier.setItem('idDupdt2', 'qte');
// console.log(monPanier);
// monPanier.removeItem('idDuPdt');
// console.log(monPanier);