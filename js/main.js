fetch(url)
.then((reponse) => 
reponse.json()
.then((data) => {
    console.log(data);
    for(let tableauProduit of data){
        console.log(tableauProduit);
        let liste = document.getElementById('liste');
        let prix = affichePrix(tableauProduit);
        liste.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3 pb-3">
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
                        <a href="./produit.html?_id=${tableauProduit._id}" class="btn btn-primary">Voir ce produit</a>
                    </div>
            </div>
        </div>`;
    }
})
).catch(erreur => console.log('erreur : ' + erreur));





//Afficher le toast
// let toast = document.getElementById('myToast');
// toast.classList.add("show");
// console.log(document.getElementById('closeToast'));
// document.getElementById('closeToast').addEventListener('click', function(){
//     toast.classList.toggle("show");
// })

//recuperer donnée dans l'URL
// let req =location.search.substring(1);
// console.log(req);
