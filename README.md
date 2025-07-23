🛍️ API de Gestión de Productos con Firebase
API REST para administrar productos de una tienda online, con autenticación JWT y base de datos en Firestore.

📋 <h3>Requisitos</h3>
Node.js v18+

npm o yarn

Cuenta de Firebase con proyecto Firestore configurado

🚀 Instalación
Clonar el repositorio:

bash
git clone https://github.com/leonandres/tt-productos-api-con-firebase.git

cd tt-2025-api-productos

Instalar dependencias:

bash
npm install
Configurar variables de entorno:

Crear archivo .env en la raíz con:

env
PORT=3000
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_bucket.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
JWT_SECRET=tu_secreto_jwt

▶️ Ejecución
bash
npm start
El servidor estará disponible en: http://localhost:3000

🔐 Autenticación
Obtener token JWT:

bash
POST /auth/login
Body: { "email": "admin@example.com", "password": "1234" }
Usar el token en headers:

text
Authorization: Bearer <token_jwt>
📊 Endpoints
Productos
Obtener todos los productos

bash
GET [/api/products](http://localhost:3000/api/products)
Obtener un producto
<img width="1368" height="702" alt="image" src="https://github.com/user-attachments/assets/41b3ac1d-880d-4769-9a09-96d172ee4e12" />


bash
GET /api/products/:id
Crear producto (Requiere autenticación)

bash
POST /api/products/create
Body: {
  "nombre": "Smartphone X Pro",
  "precio": 1000,
  "categoria": "electrónica",
  "descripcion": "Pantalla 6.7\", 512GB",
  "stock": 50
}
Actualizar producto (Requiere autenticación)

bash
PUT /api/products/:id
Body: {
  "precio": 950,
  "stock": 45
}
Eliminar producto (Requiere autenticación)

bash
DELETE /api/products/:id
🏗️ Estructura del Proyecto
text
src/
├── config/
│   └── firebase.config.js
├── controllers/
│   ├── products.controller.js
│   └── auth.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── Product.js
├── routes/
│   ├── products.routes.js
│   └── auth.routes.js
├── services/
│   └── products.service.js
└── index.js
🛠️ Dependencias
express: Framework web

firebase: Conexión con Firestore

jsonwebtoken: Autenticación JWT

cors: Manejo de CORS

dotenv: Variables de entorno

📝 Notas
Los productos se almacenan en Firestore en la colección "productos"

Credenciales de prueba para autenticación:

Email: admin@tienda.com

Password: 1234

🔧 Problemas Comunes
Error 401: Verifica que el token JWT sea válido y esté en el header Authorization

Error 404: Revisa que el ID del producto exista en Firestore

Error 500: Verifica la conexión con Firebase y las variables de entorno

📄 Licencia
MIT
