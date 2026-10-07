
import { Router } from 'express';
import alunoController from './controllers/aluno';
import cursoController from './controllers/curso';
import matriculaController from "./controllers/matricula";

const routes = Router();

// Rota inicial
routes.get("/", (request, response) => {
  return response.status(200).json({
    message: "Hello World!"
  });
});

// ROTAS DE ALUNOS
routes.get("/alunos", alunoController.list);
routes.get("/alunos/:id", alunoController.getById);
routes.post("/alunos", alunoController.create);
routes.put("/alunos/:id", alunoController.update);
routes.delete("/alunos/:id", alunoController.delete);

// ROTAS DE CURSOS
routes.get("/cursos", cursoController.list);
routes.get("/cursos/:id", cursoController.getById);
routes.post("/cursos", cursoController.create);
routes.put("/cursos/:id", cursoController.update);
routes.delete("/cursos/:id", cursoController.delete);

// ROTAS DE MATRÍCULA
routes.post("/matriculas/:id", matriculaController.create);
routes.delete("/matriculas/:id", matriculaController.delete);

// ROTAS DE FUNCIONÁRIOS
routes.post("/login");

export default routes;

