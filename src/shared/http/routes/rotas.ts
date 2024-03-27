import { Router } from "express";
import {
  listarCarros,
  detalharCarros,
  cadastrarCarros,
  atualizarCarros,
  excluirCarros,
} from "../../../controller/carros";

const rotas = Router();

rotas.get("/carros", listarCarros);
rotas.get("/carros/:id", detalharCarros);
rotas.post("/carros", cadastrarCarros);
rotas.post("/carros/novos", cadastrarCarros);
rotas.put("/carros/:id", atualizarCarros);
rotas.delete("/carros/:id", excluirCarros);

export default rotas;
