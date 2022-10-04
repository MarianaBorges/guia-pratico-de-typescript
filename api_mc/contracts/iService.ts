import { Result } from "../infra/result";
/**
 * Interface generica para o retorno de pesquisas
 */
export interface IService<T>{
    /**
     * @summary busca por id
     * @param id {String}
     */
    get(id: string): Promise<T>;
    /** 
     * @summary Realiza uma busca paginada por model
     * @param page {number} pagina
     * @param qtd {Number} quantidade de itens
     * @returns retorna uma lista de T onde T é uma Mode
    */
    getAll(page: number, qtd: number): Promise<Result<T>>;
}