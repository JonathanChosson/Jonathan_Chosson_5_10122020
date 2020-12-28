//Mise à jour de la pill du panier
pillOnStorage();
//definition de l'URL de l'API
url = `http://localhost:3000/api/cameras`;
//fetch de l'URL
fetch(url)
    .then((reponse) => 
    reponse.json()
    .then((data) => {
        let produits = data;
        //boucle pour chaque iteration dans produits (catalogue des pdts)
        for(let produit of produits){
            //recupère l'élément liste dans le HTML
            let liste = document.getElementById('liste');
            //formatage du prix
            let prix = affichePrix(produit.price);
            //insertion de l'HTML sous forme de card pour chaque PDT
            let mainCard = document.createElement("div");
            mainCard.classList.add("col-sm-12","col-md-6","col-lg-6","pb-3");
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `<img src="${produit.imageUrl}" class="card-img-top" alt="${produit.name}">`;
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            card.appendChild(cardBody);
            let row = document.createElement("div");
            row.classList.add("row");
            cardBody.appendChild(row);
            let colTitle = document.createElement("div");
            colTitle.classList.add("col-7");
            colTitle.innerHTML =`<h5 class="card-title">${produit.name}</h5>`;
            row.appendChild(colTitle);
            let colPrix = document.createElement("div");
            colPrix.classList.add("col-5", "text-right");
            colPrix.innerHTML =`<h5 class="card-title">${prix} €</h5>`;
            row.appendChild(colPrix);
            cardBody.innerHTML+=`<p class="card-text text-truncate">${produit.description}</p>`;
            cardBody.innerHTML +=`<a href="./produit.html?_id=${produit._id}" class="btn btn-primary">Voir ce produit</a>`;
            mainCard.appendChild(card);
            liste.appendChild(mainCard);
            // liste.innerHTML += `
            // <div class="col-sm-12 col-md-6 col-lg-6 pb-3">
            //     <div class="card">
            //         <img src="${produit.imageUrl}" class="card-img-top" alt="...">
            //             <div class="card-body">
            //                 <div class="row">
            //                     <div class="col-7">
            //                         <h5 class="card-title">${produit.name}</h5>
            //                     </div>
            //                     <div class="col-5 text-right">
            //                         <h5 class="card-title">${prix} €</h5>
            //                     </div>
            //                 </div>
            //                 <p class="card-text text-truncate">${produit.description}</p>
            //                 <a href="./produit.html?_id=${produit._id}" class="btn btn-primary">Voir ce produit</a>
            //             </div>
            //     </div>
            // </div>`;
        }
    })
    ).catch(erreur => console.log('erreur : ' + erreur));
