import { CustomError } from './CustomError';
import { isError } from 'lodash';

export class DomainInvariantViolation extends CustomError {
  name: 'DomainInvariantViolation';

  constructor(message: string) {
    super(message);
    this.name = 'DomainInvariantViolation';
  }
}

export const isDomainInvariantViolation = (
  e: any,
): e is DomainInvariantViolation =>
  isError(e) && e.name === 'DomainInvariantViolation';
