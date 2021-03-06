import {Entity, Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TestResult extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  answers?: object[];

  @property({
    type: 'string',
    required: true,
  })
  patientId: string;

  /**
   * 1. NO SUSPICIOUS
   * 2. SUSPICIOUS OF CORONAVIRUS
   *
   */
  @property({
    type: 'number',
  })
  result?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TestResult>) {
    super(data);
  }
}

export interface TestResultRelations {
  // describe navigational properties here
}

export type TestResultWithRelations = TestResult & TestResultRelations;
