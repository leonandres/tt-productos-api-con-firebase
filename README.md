# 🛍️ API de Gestión de Productos con Firebase

API REST para administración de catálogo de productos con autenticación JWT y Firestore.

## 📋 Requisitos

- Node.js v18+
- npm o yarn
- Proyecto Firebase configurado
- Cuenta de Firebase con:
  - Proyecto Firestore configurado
  - Colección "productos" creada
- Credenciales de Firebase (disponibles en la consola)

## 🚀 Instalación

1. Clonar repositorio:
   ```bash
   git clone https://github.com/leonandres/tt-productos-api-con-firebase.git
   cd tt-productos-api-con-firebase
2. Instalar dependencias:
   ```bash
   npm install
3. Configurar variables de entorno:
Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

   ```env
   PORT=3000
   FIREBASE_API_KEY=tu_api_key_de_firebase
   FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   FIREBASE_PROJECT_ID=tu_project_id
   FIREBASE_STORAGE_BUCKET=tu_bucket.appspot.com 
   FIREBASE_MESSAGING_SENDER_ID=tu_sender_id 
   FIREBASE_APP_ID=tu_app_id 
   JWT_SECRET=tu_clave_secreta_jwt 
## 🚀 Ejecución del servidor
Para iniciar el servidor en modo desarrollo:
      ```bash
      npm start

El servidor estará disponible en:  
http://localhost:3000

## 🔐 Sistema de autenticación

### Login
Para obtener un token JWT válido:

      ```bash
      POST /auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "1234"
}
Respuesta exitosa:

json <br>
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Uso del token
Incluir el token en los headers de las peticiones protegidas:

## Authorization: Bearer <token_jwt>
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
## 🏗️ Estructura del proyecto

tt-productos-api-con-firebase/
├── src/ <br>
│   ├── config/ <br>
│   │   └── firebase.config.js     <br>
│   ├── controllers/                <br>
│   │   ├── products.controller.js  <br>
│   │   └── auth.controller.js    <br>
│   ├── middlewares/              <br>
│   │   └── auth.middleware.js    <br>
│   ├── models/                   <br>
│   │   └── Product.js<br>
│   ├── routes/<br>
│   │   ├── products.routes.js<br>
│   │   └── auth.routes.js<br>
│   ├── services/<br>
│   │   └── products.service.js<br>
│   └── index.js<br>
├── .env.example<br>
├── .gitignore<br>
└── package.json<br>
## 📦 Dependencias principales
Paquete	Versión	Descripción
express	^4.18.2	Framework web para Node.js<br>
firebase	^9.23.0	SDK oficial de Firebase<br>
jsonwebtoken	^9.0.2	Implementación de JWT<br>
cors	^2.8.5	Middleware para CORS<br>
dotenv	^16.3.1	Manejo de variables de entorno<br>
## ⚠️ Solución de problemas
Error 401 - No autorizado<br>
Verifica que el token JWT sea válido y esté incluido en el header Authorization

Validar que el token no haya expirado (por defecto expira en 1 hora)

Error 404 - Producto no encontrado<br>
Revisa que el ID del producto exista en la colección "productos" de Firestore

Verifica que estés usando el ID correcto

Error 500 - Error del servidor<br>
Revisa la conexión con Firebase

Verifica que todas las variables de entorno estén configuradas correctamente

Consulta los logs del servidor para más detalles

## 📄 Licencia
Este proyecto está bajo la licencia MIT.

