import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {BibliotecaDataSource} from '../datasources';
import {Livro, LivroRelations, Editora, Autor} from '../models';
import {EditoraRepository} from './editora.repository';
import {AutorRepository} from './autor.repository';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.id_livro,
  LivroRelations
> {

  public readonly editora: BelongsToAccessor<Editora, typeof Livro.prototype.id_livro>;

  public readonly autor: BelongsToAccessor<Autor, typeof Livro.prototype.id_livro>;

  constructor(
    @inject('datasources.db') dataSource: BibliotecaDataSource, @repository.getter('EditoraRepository') protected editoraRepositoryGetter: Getter<EditoraRepository>, @repository.getter('AutorRepository') protected autorRepositoryGetter: Getter<AutorRepository>,
  ) {
    super(Livro, dataSource);
    this.autor = this.createBelongsToAccessorFor('autor', autorRepositoryGetter,);
    this.registerInclusionResolver('autor', this.autor.inclusionResolver);
    this.editora = this.createBelongsToAccessorFor('editora', editoraRepositoryGetter,);
    this.registerInclusionResolver('editora', this.editora.inclusionResolver);
  }
}
