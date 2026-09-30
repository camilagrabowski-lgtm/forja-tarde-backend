import espress from "express";
import cors from "cors";
import routes from "./routes";

// Inicializa o express
const app = espress();

// Define as regras do servidor
app.use(espress.json());
app.use(espress.urlencoded({ extended: true }));
app.use(cors());

// Define as rotas do servidor
app.use(routes);

export default app;
