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
import {Editora} from '../models';
import {EditoraRepository} from '../repositories';

export class EditoraController {
  constructor(
    @repository(EditoraRepository)
    public editoraRepository : EditoraRepository,
  ) {}

  @post('/editora')
  @response(200, {
    description: 'Editora model instance',
    content: {'application/json': {schema: getModelSchemaRef(Editora)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Editora, {
            title: 'NewEditora',
            exclude: ['id_editora'],
          }),
        },
      },
    })
    editora: Omit<Editora, 'id_editora'>,
  ): Promise<Editora> {
    return this.editoraRepository.create(editora);
  }

  @get('/editora/count')
  @response(200, {
    description: 'Editora model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Editora) where?: Where<Editora>,
  ): Promise<Count> {
    return this.editoraRepository.count(where);
  }

  @get('/editora')
  @response(200, {
    description: 'Array of Editora model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Editora, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Editora) filter?: Filter<Editora>,
  ): Promise<Editora[]> {
    return this.editoraRepository.find(filter);
  }

  @patch('/editora')
  @response(200, {
    description: 'Editora PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Editora, {partial: true}),
        },
      },
    })
    editora: Editora,
    @param.where(Editora) where?: Where<Editora>,
  ): Promise<Count> {
    return this.editoraRepository.updateAll(editora, where);
  }

  @get('/editora/{id}')
  @response(200, {
    description: 'Editora model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Editora, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Editora, {exclude: 'where'}) filter?: FilterExcludingWhere<Editora>
  ): Promise<Editora> {
    return this.editoraRepository.findById(id, filter);
  }

  @patch('/editora/{id}')
  @response(204, {
    description: 'Editora PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Editora, {partial: true}),
        },
      },
    })
    editora: Editora,
  ): Promise<void> {
    await this.editoraRepository.updateById(id, editora);
  }

  @put('/editora/{id}')
  @response(204, {
    description: 'Editora PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() editora: Editora,
  ): Promise<void> {
    await this.editoraRepository.replaceById(id, editora);
  }

  @del('/editora/{id}')
  @response(204, {
    description: 'Editora DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.editoraRepository.deleteById(id);
  }
}
