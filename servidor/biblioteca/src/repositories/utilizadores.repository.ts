import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Utilizadores, UtilizadoresRelations} from '../models';

export class UtilizadoresRepository extends DefaultCrudRepository<
  Utilizadores,
  typeof Utilizadores.prototype.id_utilizador,
  UtilizadoresRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Utilizadores, dataSource);
  }
}
