import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"; 

export function authentication(
    request: Request,
    response: Response, 
    next: NextFunction
) {
    try {
      const autHeader = request.headers.authorization;

      if (!autHeader) {
        return response.status(401).json("Não autenticado");
      }

      const [bearer, token] = autHeader.split(" ");

      if(bearer !== "Bearer" || !token) {
        return response.status(401).json("Não autenticado");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!);

      if (!request.body) {
        request.body = {};
      }
      request.body.user = decoded as { id: number; cargo: string };

      next();
    } catch (e) {
      console.error(e);
      return response.status(401).json("Não autenticado");
    }
}