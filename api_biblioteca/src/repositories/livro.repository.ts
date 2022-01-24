import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Livro, LivroRelations, Autor, Editora} from '../models';
import {AutorRepository} from './autor.repository';
import {EditoraRepository} from './editora.repository';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.id_livro,
  LivroRelations
> {

  public readonly livroAutor: BelongsToAccessor<Autor, typeof Livro.prototype.id_livro>;

  public readonly livroEditora: BelongsToAccessor<Editora, typeof Livro.prototype.id_livro>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('AutorRepository') protected autorRepositoryGetter: Getter<AutorRepository>, @repository.getter('EditoraRepository') protected editoraRepositoryGetter: Getter<EditoraRepository>,
  ) {
    super(Livro, dataSource);
    this.livroEditora = this.createBelongsToAccessorFor('livroEditora', editoraRepositoryGetter,);
    this.registerInclusionResolver('livroEditora', this.livroEditora.inclusionResolver);
    this.livroAutor = this.createBelongsToAccessorFor('livroAutor', autorRepositoryGetter,);
    this.registerInclusionResolver('livroAutor', this.livroAutor.inclusionResolver);
  }
}
