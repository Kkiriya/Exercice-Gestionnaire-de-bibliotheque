import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import router from "./routes/livres.routes.js";
import routerUser from "./routes/users.route.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/livres", router);
// app.use("/users", routerUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur sur http://localhost:${PORT}`);
});
