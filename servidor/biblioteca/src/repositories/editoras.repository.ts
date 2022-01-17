import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Editoras, EditorasRelations} from '../models';

export class EditorasRepository extends DefaultCrudRepository<
  Editoras,
  typeof Editoras.prototype.id_editora,
  EditorasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Editoras, dataSource);
  }
}
