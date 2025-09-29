fetch('https://mimic-server-api.vercel.app/movies')
.then((resourse)=>resourse.json())
.then((data)=>{
    const card = document.getElementById('cardContainer');
    const navbar = document.querySelector('.newCard');

    for(i of data){
        
        const img = document.createElement('img');
        const h5 = document.createElement('h5');
        const newCard = document.createElement('div');
        const cardBody = document.createElement('div');
        
        

        // card.className = "card";
        cardBody.className = "card-body";
        img.src = i.poster_path;
        img.alt = i.title;
        img.style.width = '200px';
        img.style.margin = '10px';
        img.className = "card-img-top";
        h5.innerText = i.title;
        h5.className = "card-title";
        newCard.className = "card col-md-4 g-2 d-flex justify-content-center aligh-item-center text-center ";
        newCard.style.width = '225px';
        
        


        navbar.append(newCard);
        newCard.appendChild(img);
        newCard.appendChild(cardBody);
        cardBody.appendChild(h5);
    }
}


);



