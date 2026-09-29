import espress from "express";
import cors from "cors";

// Inicializa o express
const app = espress();

// Define as regras do servidor
app.use(espress.json());
app.use(espress.urlencoded({ extended: true }));
app.use(cors());

export default app;
