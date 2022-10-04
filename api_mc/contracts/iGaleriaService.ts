import { Galeria } from "../models/galeria";
import { IService } from "./iService";

/**
 * contrato IGaleria
 * @summary esse contrato implementa a interface Iservice passando a modelde galeria
 */

export interface IGaleriaService extends IService<Galeria> {}