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
                liste.innerHTML = `
            <div class="col">
                <div class="card">
                    <img src="${tableauProduit.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <h5 class="card-title">${tableauProduit.name}</h5>
                                </div>
                                <div class="col text-right">
                                    <h5 class="card-title">${prix} €</h5>
                                </div>
                            </div>
                            <p class="card-text">${tableauProduit.description}</p>
                            <a href="#" class="btn btn-primary">Acheter</a>
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

