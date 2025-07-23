export default class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (email === "admin@example.com" && password === "1234") {
        res.status(200).json({ token: "fake-token-de-prueba" });
      } else {
        res.status(401).json({ error: "Credenciales inválidas" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error en el login" });
    }
  }
}