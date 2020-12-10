    let url = `http://127.0.0.1:3000/api/cameras`;
    fetch(url)
    .then((reponse) => 
    reponse.json()
    .then((data) => {
        console.log(data);
    })
    ).catch(erreur => console.log('erreur : ' + erreur));




// let url = `http://127.0.0.1:3000/api/cameras`;
//     fetch(url)
//     .then((reponse) => 
//     reponse.json()
//     .then((data) => {
//         console.log(data);
        
//     })
//     ).catch(erreur => console.log('erreur : ' + erreur));