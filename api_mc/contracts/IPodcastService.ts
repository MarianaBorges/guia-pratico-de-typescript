import { Podcast } from "../models/podcast";
import { IService } from "./iService";
/**
 * contrato IPodcastService
 * @summary esse contrato implementa a interface Iservice passando a model de Podcast
 */
export interface IPodcastService extends IService<Podcast> {}