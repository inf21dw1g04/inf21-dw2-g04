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
  Editora,
} from '../models';
import {LivroRepository} from '../repositories';

export class LivroEditoraController {
  constructor(
    @repository(LivroRepository)
    public livroRepository: LivroRepository,
  ) { }

  @get('/livros/{id}/editora', {
    responses: {
      '200': {
        description: 'Editora belonging to Livro',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Editora)},
          },
        },
      },
    },
  })
  async getEditora(
    @param.path.number('id') id: typeof Livro.prototype.id_livro,
  ): Promise<Editora> {
    return this.livroRepository.livroEditora(id);
  }
}
