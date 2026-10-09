import { Router } from 'express';

import alunoController from './controllers/aluno';
import cursoController from './controllers/curso';
import matriculaController from './controllers/matricula';
import funcionarioController from './controllers/funcionario';
import { authentication } from "./middlewares/authentication";

const routes = Router();

// Rota inicial
routes.get("/", (request, response) => {
  return response.status(200).json({
    message: "Hello World!"
  });
});

// ROTAS DE ALUNOS
routes.get("/alunos", authentication, alunoController.list);
routes.get("/alunos/:id", authentication, alunoController.getById);
routes.post("/alunos", authentication, alunoController.create);
routes.put("/alunos/:id", authentication, alunoController.update);
routes.delete("/alunos/:id", authentication, alunoController.delete);

// ROTAS DE CURSOS
routes.get("/cursos", authentication, cursoController.list);
routes.get("/cursos/:id", authentication, cursoController.getById);
routes.post("/cursos", authentication, cursoController.create);
routes.put("/cursos/:id", authentication, cursoController.update);
routes.delete("/cursos/:id", authentication, cursoController.delete);

// ROTAS DE MATRÍCULA
routes.post("/matriculas/:id", authentication, matriculaController.create);
routes.delete("/matriculas/:id", authentication, matriculaController.delete);

// ROTAS DE FUNCIONÁRIOS
routes.post("/login", funcionarioController.login);

export default routes;