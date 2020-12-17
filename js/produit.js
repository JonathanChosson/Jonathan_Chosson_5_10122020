//recuperer donnée dans l'URL
let idDemande =location.search.substring(5);
//Mise à jour de la pill du panier
pillOnStorage();
//Vérifie qu'un produit est slectionné
if (idDemande !== ""){
    //modification de l'adresse d'appel à l'API
    let url2 = `http://localhost:3000/api/cameras/${idDemande}`
    fetch(url2)
    .then((reponse) => 
    reponse.json()
    .then((ficheProduit) => {
        //selectionne la balise HTML dans laquelle inserer le code
        let liste = document.getElementById('produit');
        //formatage du prix
        let prix = affichePrix(ficheProduit.price);
        //implémentation des options de versions
        let selectionVersion = afficheVersions(ficheProduit);
        //insére le code
        liste.innerHTML = `
            <div class="col">
                <div class="card">
                    <div class="row">
                        <div class="col-sm-12 col-md-7 col-lg-8">
                            <img src="${ficheProduit.imageUrl}" class="card-img-top" alt="...">
                        </div>
                        <div class="col-sm-12 col-md-5 col-lg-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <h5 class="card-title">${ficheProduit.name}</h5>
                                    </div>
                                    <div class="col text-right">
                                        <h5 class="card-title">${prix} €</h5>
                                    </div>
                                </div>
                                <select class="custom-select">
                                    <option selected>Choisir la version</option>
                                    ${selectionVersion}
                                </select>
                                <p class="card-text pt-2">${ficheProduit.description}</p>
                                <a href="#" class="btn btn-primary" id="ajoutPanier">Ajouter au panier</a>
                                <div class="container">
                                    <div class="toast show" id="myToast" hidden>
                                        <div class="toast-header">
                                            <strong class="mr-auto"><i class="fa fa-grav"></i> Félicitations</strong>
                                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" id="closeToast">&times;</button>
                                        </div>
                                        <div class="toast-body">
                                                Votre produit à été ajouté au panier. <a href="panier.html" alt="panier">Voir mon panier</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        //fonction pour ajouter au panier
        let btnAjoutPanier = document.getElementById('ajoutPanier');
        btnAjoutPanier.addEventListener('click', function(){
            let objetProduit = new Produit(idDemande, ficheProduit.name,ficheProduit.description,ficheProduit.price, 1,ficheProduit.imageUrl);
            // monPanier.setItem(monPanier.length, JSON.stringify(objetProduit));
            produitDansPanier.push(objetProduit);
            monPanier.setItem(0, JSON.stringify(produitDansPanier));
            pillOnStorage();
            //Afficher le toast
            let toast = document.getElementById('myToast');
            toast.toggleAttribute("hidden");
            btnAjoutPanier.setAttribute("hidden", "");
            document.getElementById('closeToast').addEventListener('click', function(){
                toast.setAttribute("hidden", "");
                btnAjoutPanier.removeAttribute("hidden");
            })
        })
    })
).catch(erreur => console.log('erreur : ' + erreur));
}else{
    alert('Veuillez choisir un produit');
    let liste = document.getElementById('produit');
        liste.innerHTML += `<a class="nav-link" href="./index.html">Retour à l'accueil</a>`
}

