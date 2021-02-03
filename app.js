const express = require('express');
const path = require('path');
const app = express();

port = 3005;

app.listen(port, () => {
    console.log('Servidor corriendo');
});

const staticFolder = path.resolve(__dirname, './public');
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/product-cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/product-detail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});