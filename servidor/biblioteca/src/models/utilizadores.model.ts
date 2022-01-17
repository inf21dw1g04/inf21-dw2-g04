import {Entity, model, property} from '@loopback/repository';

@model()
export class Utilizadores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_utilizador?: number;

  @property({
    type: 'string',
  })
  nome?: string;


  constructor(data?: Partial<Utilizadores>) {
    super(data);
  }
}

export interface UtilizadoresRelations {
  // describe navigational properties here
}

export type UtilizadoresWithRelations = Utilizadores & UtilizadoresRelations;
