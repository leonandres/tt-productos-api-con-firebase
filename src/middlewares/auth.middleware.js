export const authMiddleware = (req, res, next) => {
  console.log("Middleware de autenticación ejecutado (JWT pendiente)");
  next(); // Permite continuar
};