import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Autor, AutorRelations} from '../models';

export class AutorRepository extends DefaultCrudRepository<
  Autor,
  typeof Autor.prototype.id_autor,
  AutorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Autor, dataSource);
  }
}
