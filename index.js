const express = require('express');
const { popScopeId } = require('vue');
const app = express();
const port = 3000;

const products = {'name': 'laptop'};

app.get('/', (req, res) => {
    res.send('This is an express server');
});

app.get('/new-route', (req, res) => {
    res.send('New route');
})

app.get('/get-products', (req, res) => {
    res.json(products);
})

app.listen(port, () => {
    console.log(`My port: ${port}`);
})