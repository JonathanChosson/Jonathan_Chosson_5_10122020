    pillOnStorage();
    
    let commandeJSON = sessionStorage.order;    
    let infoCommande = commandeJSON && JSON.parse(commandeJSON);
    console.log(infoCommande);

    //Première phrase pour remercier le client de la commande
    titreMerci = document.getElementById('titreMerci');
    titreMerci.innerHTML = `Merci ${infoCommande.contact.firstName} pour votre commande`;

    for (produitPanier of produitDansPanier){
    afficheTotalPanier();
    }
    
    //Texte avec les détails de la commande
    texteCommande = document.getElementById('texteCommande');
    texteCommande.innerHTML = `
                                <p> Voici votre numéro de commande : ${infoCommande.orderId}</p>
                                <p> Pour un montant total de : ${totalPanierAffichage} € </p>
                            `;

    //vide le panier
    viderPanier();
