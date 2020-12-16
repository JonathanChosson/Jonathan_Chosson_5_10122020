pillOnStorage();
fetch(url)
.then((reponse) => 
reponse.json()
.then((data) => {
    for(let produit of data){
        let liste = document.getElementById('liste');
        let prix = affichePrix(produit.price);
        console.log(produit);
        // class FicheProduit {
        //     constructor
        // }
        liste.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-6 pb-3">
            <div class="card">
                <img src="${produit.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-7">
                                <h5 class="card-title">${produit.name}</h5>
                            </div>
                            <div class="col-5 text-right">
                                <h5 class="card-title">${prix} €</h5>
                            </div>
                        </div>
                        <p class="card-text text-truncate">${produit.description}</p>
                        <a href="./produit.html?_id=${produit._id}" class="btn btn-primary">Voir ce produit</a>
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

// pill html 
//<span class="badge badge-primary badge-pill">14</span>