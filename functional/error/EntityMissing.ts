import { isError } from 'lodash';

import { CustomError } from './CustomError';

export class EntityMissing extends CustomError {
  name: 'EntityMissing';

  constructor(message: string) {
    super(message);
    this.name = 'EntityMissing';
  }
}

export const isEntityMissing = (e: any): e is EntityMissing =>
  isError(e) && e.name === 'EntityMissing';
