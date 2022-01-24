import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Editora, EditoraRelations} from '../models';

export class EditoraRepository extends DefaultCrudRepository<
  Editora,
  typeof Editora.prototype.id_editora,
  EditoraRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Editora, dataSource);
  }
}
