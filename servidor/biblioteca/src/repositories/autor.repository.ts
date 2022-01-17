import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BibliotecaDataSource} from '../datasources';
import {Autor, AutorRelations} from '../models';

export class AutorRepository extends DefaultCrudRepository<
  Autor,
  typeof Autor.prototype.id_autor,
  AutorRelations
> {
  constructor(
    @inject('datasources.biblioteca') dataSource: BibliotecaDataSource,
  ) {
    super(Autor, dataSource);
  }
}
