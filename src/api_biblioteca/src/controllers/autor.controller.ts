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
import {Autor} from '../models';
import {AutorRepository} from '../repositories';

export class AutorController {
  constructor(
    @repository(AutorRepository)
    public autorRepository : AutorRepository,
  ) {}

  @post('/autor')
  @response(200, {
    description: 'Autor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Autor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autor, {
            title: 'NewAutor',
            exclude: ['id_autor'],
          }),
        },
      },
    })
    autor: Omit<Autor, 'id_autor'>,
  ): Promise<Autor> {
    return this.autorRepository.create(autor);
  }

  @get('/autor/count')
  @response(200, {
    description: 'Autor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Autor) where?: Where<Autor>,
  ): Promise<Count> {
    return this.autorRepository.count(where);
  }

  @get('/autor')
  @response(200, {
    description: 'Array of Autor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Autor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Autor) filter?: Filter<Autor>,
  ): Promise<Autor[]> {
    return this.autorRepository.find(filter);
  }

  @patch('/autor')
  @response(200, {
    description: 'Autor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autor, {partial: true}),
        },
      },
    })
    autor: Autor,
    @param.where(Autor) where?: Where<Autor>,
  ): Promise<Count> {
    return this.autorRepository.updateAll(autor, where);
  }

  @get('/autor/{id}')
  @response(200, {
    description: 'Autor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Autor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Autor, {exclude: 'where'}) filter?: FilterExcludingWhere<Autor>
  ): Promise<Autor> {
    return this.autorRepository.findById(id, filter);
  }

  @patch('/autor/{id}')
  @response(204, {
    description: 'Autor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autor, {partial: true}),
        },
      },
    })
    autor: Autor,
  ): Promise<void> {
    await this.autorRepository.updateById(id, autor);
  }

  @put('/autor/{id}')
  @response(204, {
    description: 'Autor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() autor: Autor,
  ): Promise<void> {
    await this.autorRepository.replaceById(id, autor);
  }

  @del('/autor/{id}')
  @response(204, {
    description: 'Autor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.autorRepository.deleteById(id);
  }
}
