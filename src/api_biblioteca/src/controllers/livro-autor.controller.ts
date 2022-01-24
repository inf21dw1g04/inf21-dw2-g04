import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Livro,
  Autor,
} from '../models';
import {LivroRepository} from '../repositories';

export class LivroAutorController {
  constructor(
    @repository(LivroRepository)
    public livroRepository: LivroRepository,
  ) { }

  @get('/livros/{id}/autor', {
    responses: {
      '200': {
        description: 'Autor belonging to Livro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Autor)},
          },
        },
      },
    },
  })
  async getAutor(
    @param.path.number('id') id: typeof Livro.prototype.id_livro,
  ): Promise<Autor> {
    return this.livroRepository.livroAutor(id);
  }
}
