import { Request, Response } from 'express';
import { prisma } from '../../config/prisma';
import { handleErrors } from '../helpers/handleErrors';

export default {
  // Listar todos os cursos
  list: async (request: Request, response: Response) => {
    try {
      const cursos = await prisma.curso.findMany();
      return response.status(200).json(cursos);
    } catch (error) {
      return handleErrors(error, response);
    }
  },

  // Buscar curso pelo ID
  getById: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const curso = await prisma.curso.findUnique({
        where: {
          id: +id,
        },

        include: {
          alunos: true,
        },
      });

      return response.status(200).json(curso);
    } catch (e) {
      return handleErrors(e, response);
    }
  },
  // Criar curso
  create: async (request: Request, response: Response) => {
    try {
      const {
        nome,
        descricao,
        cargaHoraria,
        professorResponsavel,
      } = request.body;
      if (!nome || !descricao || !cargaHoraria || !professorResponsavel) {
        return response
          .status(400)
          .json("Dados do curso incompletos");
      }

      const curso = await prisma.curso.create({
        data: {
          nome,
          descricao,
          cargaHoraria,
          professorResponsavel,
        },
      });

      return response.status(201).json(curso);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  // Atualizar curso
  update: async (request: Request, response: Response) => {
    try {
      const { id } = request.params
      const {
        nome,
        descricao,
        cargaHoraria,
        professorResponsavel,
      } = request.body;
      const curso = await prisma.curso.update({
        where: {
          id: +id,
        },
        data: {
          nome,
          descricao,
          cargaHoraria,
          professorResponsavel,
        },
      });

      return response.status(200).json(curso);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  // Excluir curso
  delete: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const curso = await prisma.curso.delete({
        where: {
          id: +id,
        },
      });

      return response.status(200).json(curso);
    } catch (e) {
      return handleErrors(e, response);
    }
  },
};
