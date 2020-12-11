//recuperer donnée dans l'URL
let idDemande =location.search.substring(5);
console.log(idDemande);
let url = `http://127.0.0.1:3000/api/cameras`;

if (idDemande !== ""){
    fetch(url)
.then((reponse) => 
reponse.json()
.then((data) => {
    console.log(data);
    for(let tableauProduit of data){
        console.log(tableauProduit._id);
        let liste = document.getElementById('produit');
        if(idDemande == tableauProduit._id){
            liste.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${tableauProduit.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tableauProduit.name}</h5>
                        <p class="card-text">${tableauProduit.description}</p>
                        <a href="#" class="btn btn-primary">Voir ce produit</a>
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
