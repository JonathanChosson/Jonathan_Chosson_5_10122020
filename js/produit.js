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
                                        <div class="toast-body" id="message">
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
            //instace du nouveau produit
            let objetProduit = new Produit(idDemande, ficheProduit.name,ficheProduit.description,ficheProduit.price, 1,ficheProduit.imageUrl);
            //initialise le fait qu'il soit déjà présent comme faux
            let dejaPresent = false;
            //initialise l'index du produit si présent
            let indexModification;
            //Parcours le tableau produitDansPanier
            for (listeProduit of produitDansPanier){
                //verifie si l'ID du nouveau produi est déjà présent dans le panier
                //si oui deja present passe true et indexModification prend la valeur du produit à modifier dans produitDansPanier
                switch (objetProduit.id){
                    case listeProduit.id:
                        dejaPresent = true;
                        indexModification = produitDansPanier.indexOf(listeProduit);
                    break;
                }
            }
            let messageToast = document.getElementById('message');
            // execute l'action d'indentation si déjà présent ou d'ajout si nouveau produit
            if (dejaPresent){
                produitDansPanier[indexModification].qte ++;
                messageToast.innerHTML = `Vous avez <span class="text-primary">${produitDansPanier[indexModification].qte}</span> ${produitDansPanier[indexModification].nom} dans votre panier. <a href="panier.html" alt="panier">Voir mon panier</a>`;
            }
            else{
                produitDansPanier.push(objetProduit);
                messageToast.innerHTML = `Votre produit à été ajouté à votre panier. <a href="panier.html" alt="panier">Voir mon panier</a>`;
            }
            monPanier.setItem(0, JSON.stringify(produitDansPanier));
            //mise à jour de la pastille du nombre de produit dans le panier
            pillOnStorage();
            //Afficher le toast qui confirme l'ajout au panier
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
    //panier est vide alert l'utilisateur
    alert('Veuillez choisir un produit');
    let liste = document.getElementById('produit');
        liste.innerHTML += `<a class="nav-link" href="./index.html">Retour à l'accueil</a>`
}

