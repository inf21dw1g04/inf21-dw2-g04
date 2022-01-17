import {Entity, model, property} from '@loopback/repository';

@model()
export class Editoras extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_editora?: number;

  @property({
    type: 'string',
  })
  nome?: string;


  constructor(data?: Partial<Editoras>) {
    super(data);
  }
}

export interface EditorasRelations {
  // describe navigational properties here
}

export type EditorasWithRelations = Editoras & EditorasRelations;
