import { News } from '../models/news';
import { IService } from './iService';
/**
 * contrato INewsService
 * @summary esse contrato implementa a interface Iservice passando a model de news
 */
export interface INewsService extends IService<News> {}