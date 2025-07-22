import 'dotenv/config'; 
import express from 'express';
import productRoutes from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use('/api/products', productRoutes);

// Ruta de prueba (opcional)
app.get('/', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'API funcionando',
    endpoints: {
      products: '/api/products',
      docs: 'Agregar aquí la URL de documentación'
    }
  });
});

app.listen(PORT, () => {
  console.log(`
    Servidor listo en: http://localhost:${PORT}
    Endpoint de productos: http://localhost:${PORT}/api/products
  `);
});