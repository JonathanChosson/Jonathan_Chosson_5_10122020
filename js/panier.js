pillOnStorage();
if(produitDansPanier.length > 0){
    for (produitPanier of produitDansPanier){
        let listePanier = document.getElementById('produitPanier');
        let positionProduit = produitDansPanier.indexOf(produitPanier);
        let prix = affichePrix(produitPanier.prix);
        let prixTotal = document.getElementById('prixTotal');
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
                <button type="button" class="rounded corbeille" data-toggle="modal" data-target="#exampleModal">
                    <span class="fas fa-trash-alt text-danger" id="${positionProduit}"></span>
                </button>
            </td>
        </tr>
        `;
        
        afficheTotalPanier();
        prixTotal.innerHTML = `${totalPanierAffichage} €`;
    }
    supression();
}else{
    let panierVide = document.getElementById('panierVide');
    let formulaireCommande =document.getElementById('formulaireCommande');
    formulaireCommande.classList.add("d-none");
    panierVide.innerHTML =`
    <div class="col text-center">
        <p>Votre Panier semble vide</p>
        <img src="./images/add_to_cart.webp" alt="Panier vide" class="img-fluid" />
    </div>
    `;
}

let formulaire = document.getElementById('formulaire');

let boutoncommande = document.getElementById('commander');
boutoncommande.addEventListener("click", function(event){
    if (formulaire.checkValidity()){
        event.preventDefault();
        const contact = {
            firstName : document.getElementById('validationPrenom').value,
            lastName : document.getElementById('validationNom').value,
            address : document.getElementById('validationAdresse').value,
            city : document.getElementById('validationVille').value,
            email : document.getElementById('validationEmail').value
        }
        let products =[];
        for (listeId of produitDansPanier){
            if (listeId.qte > 1){
                console.log(listeId.qte);
                for (let i = 0; i < listeId.qte;i ++){
                    products.push(listeId.id);
                }
            }else{
                products.push(listeId.id);
            }
        }
        console.log(products);
            fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ contact, products })
            })
                .then(response => response.json()) 
                .then(data => {
                    console.log(data);
                    sessionStorage.setItem('order', JSON.stringify(data));
                    console.log(sessionStorage);
                    document.location.href = "/commande.html"
                })
                .catch(error => {
                    window.alert(error);
                })
    }else{
    }
})