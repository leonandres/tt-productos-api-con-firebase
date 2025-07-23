<h2>🛍️ API de Gestión de Productos con Firebase</h2>
API REST para administrar productos de una tienda online, con autenticación JWT y base de datos en Firestore.

<h3>📋 Requisitos previos</h3>
Node.js v18 o superior

npm o yarn instalado

Proyecto Firebase con Firestore configurado

Credenciales de Firebase (disponibles en la consola de Firebase)

<h3>🛠️ Configuración inicial</h3>
Clonar el repositorio:

git clone https://github.com/leonandres/tt-productos-api-con-firebase.git<br>
cd tt-productos-api-con-firebase
Instalar dependencias:

npm install
Configurar variables de entorno:
Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

env
PORT=3000
FIREBASE_API_KEY=tu_api_key_de_firebase
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_bucket.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
JWT_SECRET=tu_clave_secreta_jwt
🚀 Ejecución del servidor
Para iniciar el servidor en modo desarrollo:

npm start
El servidor estará disponible en:
http://localhost:3000

🔐 Sistema de autenticación
Login
Para obtener un token JWT válido:

POST /auth/login
Content-Type: application/json

{
  "email": "admin@tienda.com",
  "password": "1234"
}
Respuesta exitosa:

json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Uso del token
Incluir el token en los headers de las peticiones protegidas:

Authorization: Bearer <token_jwt>
📚 Endpoints disponibles
🔹 Productos
Listar todos los productos
GET /api/products
<img width="1366" height="703" alt="image" src="https://github.com/user-attachments/assets/4897723b-122c-4c16-999c-1752269ba80e" />

Obtener un producto específico

GET /api/products/:id
Crear nuevo producto (Requiere autenticación)
bash
POST /api/products/create
Content-Type: application/json

{
  "nombre": "Smartphone X Pro",
  "precio": 999.99,
  "categoria": "electrónica",
  "descripcion": "Pantalla AMOLED 6.7\"",
  "stock": 50
}
Actualizar producto (Requiere autenticación)
bash
PUT /api/products/:id
Content-Type: application/json

{
  "precio": 899.99,
  "stock": 45
}
Eliminar producto (Requiere autenticación)

DELETE /api/products/:id
🏗️ Estructura del proyecto

tt-productos-api-con-firebase/
├── src/
│   ├── config/
│   │   └── firebase.config.js
│   ├── controllers/
│   │   ├── products.controller.js
│   │   └── auth.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   ├── products.routes.js
│   │   └── auth.routes.js
│   ├── services/
│   │   └── products.service.js
│   └── index.js
├── .env.example
├── .gitignore
└── package.json
📦 Dependencias principales
Paquete	Versión	Descripción
express	^4.18.2	Framework web para Node.js
firebase	^9.23.0	SDK oficial de Firebase
jsonwebtoken	^9.0.2	Implementación de JWT
cors	^2.8.5	Middleware para CORS
dotenv	^16.3.1	Manejo de variables de entorno
⚠️ Solución de problemas
Error 401 - No autorizado
Verifica que el token JWT sea válido y esté incluido en el header Authorization

Validar que el token no haya expirado (por defecto expira en 1 hora)

Error 404 - Producto no encontrado
Revisa que el ID del producto exista en la colección "productos" de Firestore

Verifica que estés usando el ID correcto

Error 500 - Error del servidor
Revisa la conexión con Firebase

Verifica que todas las variables de entorno estén configuradas correctamente

Consulta los logs del servidor para más detalles

📄 Licencia
Este proyecto está bajo la licencia MIT.

