const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let cart = []; // representa una base de datos simulada de carritos

// Encuentra y devuelve la lista de todos los carritos
app.get('/api/carrito', (req, res) => {
    res.json(cart);
});

// Encuentra y devuelve la lista de todos los productos
app.get('/api/producto', (req, res) => {
  res.json(productos);
});

// Encuentra y devuelve un carrito específico por su ID
app.get('/api/carrito/:id', (req, res) => {
  let carrito;
  try {
      carrito = cart.find(c => c.id === parseInt(req.params.id));
      if (!carrito) throw new Error('El carrito no se encontro');
      res.json(carrito);
  } catch (error) {
      res.status(404).send(error.message);
  }
});

let users = []; // representa una base de datos simulada de usuarios

// Encuentra y devuelve un usuario específico por su ID
// Encuentra y devuelve la lista de todos los usuarios

app.get('/api/user', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)){
            throw new Error('el ID debe ser un número');
        }
        const user = user.find(u => u.id === id);
        if (!user) throw new Error('Usuario no encontrado');
        res.json(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Inicia el servidor
const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Server running on port ${port}`));
