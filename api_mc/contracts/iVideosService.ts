import { Videos } from "../models/videos";
import { IService } from "./iService";
/**
 * contrato IVideosService 
 * @summary esse contrato implementa a interface Iservice passando a model de videos
 */
export interface IVideosService extends IService<Videos> {}