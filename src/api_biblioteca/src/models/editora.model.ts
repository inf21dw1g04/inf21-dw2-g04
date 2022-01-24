import {Entity, model, property} from '@loopback/repository';

@model()
export class Editora extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_editora?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;


  constructor(data?: Partial<Editora>) {
    super(data);
  }
}

export interface EditoraRelations {
  // describe navigational properties here
}

export type EditoraWithRelations = Editora & EditoraRelations;
