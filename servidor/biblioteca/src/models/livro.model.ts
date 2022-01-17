import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Editora} from './editora.model';
import {Autor} from './autor.model';

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
  })
  titulo?: string;

  @property({
    type: 'number',
  })
  ano_publicacao?: number;
  @belongsTo(() => Editora, {name: 'editora'})
  id_editora: number;

  @belongsTo(() => Autor, {name: 'autor'})
  id_autor: number;

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;
