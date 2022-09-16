import { Router } from "express"; //el router permite definir distintas rutas
const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "First Website with Node" })
); //para que se aplique ese titulo cuando vaya a esa direccion

router.get("/about", (req, res) => res.render("about", { title: "About Me" }));

router.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact Me" })
);

export default router;
