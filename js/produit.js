//recuperer donnée dans l'URL
let idDemande =location.search.substring(5);
console.log(idDemande);


if (idDemande !== ""){
    fetch(url)
    .then((reponse) => 
    reponse.json()
    .then((data) => {
        for(let tableauProduit of data){
            let liste = document.getElementById('produit');
            if(idDemande == tableauProduit._id){
                let prix = affichePrix(tableauProduit);
                let selectionVersion = afficheVersions(tableauProduit);
                console.log(data);
                liste.innerHTML = `
                    <div class="col">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm-12 col-md-7 col-lg-8">
                                    <img src="${tableauProduit.imageUrl}" class="card-img-top" alt="...">
                                </div>
                                <div class="col-sm-12 col-md-5 col-lg-4">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title">${tableauProduit.name}</h5>
                                            </div>
                                            <div class="col text-right">
                                                <h5 class="card-title">${prix} €</h5>
                                            </div>
                                        </div>
                                        <select class="custom-select">
                                            <option selected>Choisir la version</option>
                                            ${selectionVersion}
                                        </select>
                                        <p class="card-text pt-2">${tableauProduit.description}</p>
                                        <a href="#" class="btn btn-primary" id="ajoutPanier">Ajouter au panier</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }else{
            }
        }
    })
).catch(erreur => console.log('erreur : ' + erreur));
}else{
    alert('Veuillez choisir un produit');
    let liste = document.getElementById('produit');
        liste.innerHTML += `<a class="nav-link" href="./index.html">Retour à l'accueil</a>`
}

