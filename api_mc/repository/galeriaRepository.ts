import mongoose from "mongoose";
import { Fotos } from "../models/fotos";
import { Galeria } from "../models/galeria";

const GaleriaSchema = new mongoose.Schema<Galeria>({
    titulo: {String},
    texto: {String},
    fotos: [Array<Fotos>()],
    dataPublicacao: {String},
    ativo: {Boolean}
});

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema);