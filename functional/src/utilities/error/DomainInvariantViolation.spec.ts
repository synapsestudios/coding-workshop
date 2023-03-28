import {
  DomainInvariantViolation,
  isDomainInvariantViolation,
} from './DomainInvariantViolation';

describe('DomainInvariantviolation', () => {
  it('Constructs the error successfully', () => {
    const e = new DomainInvariantViolation('MY ERROR');
    expect(e.name).toBe('DomainInvariantViolation');
    expect(e.message).toBe('MY ERROR');
  });

  it('is resolved successfully by its type predicate', () => {
    const e = new DomainInvariantViolation('MY ERROR');
    expect(isDomainInvariantViolation(e)).toBeTruthy();
  });

  it('rejects other kinds of errors', () => {
    const e = new Error('some error');
    expect(isDomainInvariantViolation(e)).toBeFalsy();
  });

  it('rejects other objects masquerading as a violation', () => {
    const e = { name: 'DomainInvariantViolation' };
    expect(isDomainInvariantViolation(e)).toBeFalsy();
  });
});
