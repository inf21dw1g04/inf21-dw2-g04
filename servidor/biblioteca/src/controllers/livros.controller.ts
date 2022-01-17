import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Livros} from '../models';
import {LivrosRepository} from '../repositories';

export class LivrosController {
  constructor(
    @repository(LivrosRepository)
    public livrosRepository : LivrosRepository,
  ) {}

  @post('/livros')
  @response(200, {
    description: 'Livros model instance',
    content: {'application/json': {schema: getModelSchemaRef(Livros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livros, {
            title: 'NewLivros',
            exclude: ['id_livro'],
          }),
        },
      },
    })
    livros: Omit<Livros, 'id'>,
  ): Promise<Livros> {
    return this.livrosRepository.create(livros);
  }

  @get('/livros/count')
  @response(200, {
    description: 'Livros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Livros) where?: Where<Livros>,
  ): Promise<Count> {
    return this.livrosRepository.count(where);
  }

  @get('/livros')
  @response(200, {
    description: 'Array of Livros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Livros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Livros) filter?: Filter<Livros>,
  ): Promise<Livros[]> {
    return this.livrosRepository.find(filter);
  }

  @patch('/livros')
  @response(200, {
    description: 'Livros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livros, {partial: true}),
        },
      },
    })
    livros: Livros,
    @param.where(Livros) where?: Where<Livros>,
  ): Promise<Count> {
    return this.livrosRepository.updateAll(livros, where);
  }

  @get('/livros/{id}')
  @response(200, {
    description: 'Livros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Livros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Livros, {exclude: 'where'}) filter?: FilterExcludingWhere<Livros>
  ): Promise<Livros> {
    return this.livrosRepository.findById(id, filter);
  }

  @patch('/livros/{id}')
  @response(204, {
    description: 'Livros PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livros, {partial: true}),
        },
      },
    })
    livros: Livros,
  ): Promise<void> {
    await this.livrosRepository.updateById(id, livros);
  }

  @put('/livros/{id}')
  @response(204, {
    description: 'Livros PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() livros: Livros,
  ): Promise<void> {
    await this.livrosRepository.replaceById(id, livros);
  }

  @del('/livros/{id}')
  @response(204, {
    description: 'Livros DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.livrosRepository.deleteById(id);
  }
}
