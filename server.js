const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const { response } = require('express');
const app = express();

app.set('view engine', ejs);

app.get('/', (req, res)=>{
    let url = `https://api.spoonacular.com/recipes/random/?apiKey=55da68c478a844a08d337fd000b43b79`;

    axios.get(url)
    .then(response =>{
        console.log(response.data.recipes[0]);
        let recipe = response.data.recipes[0];

        res.render('index.ejs', {
            spoonRec: recipe,
            pageTitle: "Random Recipes"
        });

    });

});

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
});