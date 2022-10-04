/**
 * @summary Classe abstrata para a criação das models
 * @type titulo {String} título 
 * @type texto {String} texto ou descrição 
 * @type imagem {String} imagem default ou avatar 
 * @type dataPublicação {String} de publicação 
 * @type titulo {String} tags relacionadas a model
 * @type link {String} link do conteudo Ex.:https://conteudo.com.br
 * @type ativo {Boolean} status
*/

export abstract class Core{
    titulo: String;
    texto: String;
    imagem: String;
    dataPublicacao: Date;
    tags: String;
    link: String;
    ativo: Boolean;
}