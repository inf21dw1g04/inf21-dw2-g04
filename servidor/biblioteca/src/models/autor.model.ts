import {Entity, model, property} from '@loopback/repository';

@model()
export class Autor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_autor?: number;

  @property({
    type: 'string',
  })
  nome?: string;

  @property({
    type: 'string',
  })
  nacionalidade?: string;


  constructor(data?: Partial<Autor>) {
    super(data);
  }
}

export interface AutorRelations {
  // describe navigational properties here
}

export type AutorWithRelations = Autor & AutorRelations;
