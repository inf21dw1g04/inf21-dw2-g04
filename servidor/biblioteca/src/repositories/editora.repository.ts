import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {BibliotecaDataSource} from '../datasources';
import {Editora, EditoraRelations, Livro} from '../models';
import {LivroRepository} from './livro.repository';

export class EditoraRepository extends DefaultCrudRepository<
  Editora,
  typeof Editora.prototype.id_editora,
  EditoraRelations
> {

  public readonly livros: HasManyRepositoryFactory<Livro, typeof Editora.prototype.id_editora>;

  constructor(
    @inject('datasources.biblioteca') dataSource: BibliotecaDataSource, @repository.getter('LivroRepository') protected livroRepositoryGetter: Getter<LivroRepository>,
  ) {
    super(Editora, dataSource);
    this.livros = this.createHasManyRepositoryFactoryFor('livros', livroRepositoryGetter,);
    this.registerInclusionResolver('livros', this.livros.inclusionResolver);
  }
}
