import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Livros, LivrosRelations} from '../models';

export class LivrosRepository extends DefaultCrudRepository<
  Livros,
  typeof Livros.prototype.id_livro,
  LivrosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Livros, dataSource);
  }
}
