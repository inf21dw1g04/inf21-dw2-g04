import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BibliotecaDataSource} from '../datasources';
import {Utilizador, UtilizadorRelations} from '../models';

export class UtilizadorRepository extends DefaultCrudRepository<
  Utilizador,
  typeof Utilizador.prototype.id_utilizador,
  UtilizadorRelations
> {
  constructor(
    @inject('datasources.biblioteca') dataSource: BibliotecaDataSource,
  ) {
    super(Utilizador, dataSource);
  }
}
