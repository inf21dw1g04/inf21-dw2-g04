import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Autor} from './autor.model';
import {Editora} from './editora.model';

@model()
export class Livro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_livro?: number;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'number',
    required: true,
  })
  ano_publicacao: number;
  @belongsTo(() => Autor, {name: 'livroAutor'})
  id_autor: number;

  @belongsTo(() => Editora, {name: 'livroEditora'})
  id_editora: number;

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;
