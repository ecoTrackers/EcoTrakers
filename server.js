const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 5050;

const corsOptions = {
    origin: "http://localhost:3000", // Reemplaza esto con el dominio permitido
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Habilita las cookies y las credenciales de autenticación
  };
  
  app.use(cors(corsOptions)); // Aplica la configuración CORS personalizada  

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a la página de inicio");
});

// (esto solo es un ejemplo)
const tempProduct = {
    id: "2_1699378831330",
    name: "producto 2",
    cost: 2000,
    stock: 100,
  };
  
  app.get("/", (req, res) => {
    res.send("Bienvenido a la página de inicio");
  });
  
  app.post("/realizar_compra", async (req, res) => {
    console.log("Solicitud de compra recibida");
    try {
      const productosSeleccionados = req.body.productosSeleccionados;
  
      for (const product of productosSeleccionados) {
        //producto temporal
        if (product.id === tempProduct.id) {
          if (tempProduct.stock < 1) {
            return res.status(400).send("No hay suficiente stock para el producto " + tempProduct.name);
          }
          tempProduct.stock -= 1;
        } else {
          return res.status(404).send("Producto no encontrado");
        }
      }
  
      res.status(200).json({ message: "Compra realizada con éxito", productosComprados });
    } catch (error) {
      console.error("Error al procesar la compra", error);
      res.status(500).send("Error al procesar la compra");
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });


