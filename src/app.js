const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + "/public"))
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("servidor corriendo " + PORT);
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});
app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/views/carrito.html');
});
app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
});
app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/views/contacto.html');
});



