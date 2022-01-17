import {Entity, model, property} from '@loopback/repository';

@model()
export class Livros extends Entity {
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


  constructor(data?: Partial<Livros>) {
    super(data);
  }
}

export interface LivrosRelations {
  // describe navigational properties here
}

export type LivrosWithRelations = Livros & LivrosRelations;
