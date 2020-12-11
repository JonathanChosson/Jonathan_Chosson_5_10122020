let url = `http://127.0.0.1:3000/api/cameras`;
fetch(url)
.then((reponse) => 
reponse.json()
.then((data) => {
    console.log(data);
    for(let tableauProduit of data){
        console.log(tableauProduit);
        let liste = document.getElementById('liste');
        liste.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
                <img src="${tableauProduit.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tableauProduit.name}</h5>
                        <p class="card-text">${tableauProduit.description}</p>
                        <a href="#" class="btn btn-primary">Voir ce produit</a>
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
