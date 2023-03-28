import { EntityMissing, isEntityMissing } from './EntityMissing';

describe('EntityMissing', () => {
  it('Constructs the error successfully', () => {
    const e = new EntityMissing('MY ERROR');
    expect(e.name).toBe('EntityMissing');
    expect(e.message).toBe('MY ERROR');
  });

  it('is resolved successfully by its type predicate', () => {
    const e = new EntityMissing('MY ERROR');
    expect(isEntityMissing(e)).toBeTruthy();
  });

  it('rejects other kinds of errors', () => {
    const e = new Error('some error');
    expect(isEntityMissing(e)).toBeFalsy();
  });

  it('rejects other objects masquerading as a violation', () => {
    const e = { name: 'EntityMissing' };
    expect(isEntityMissing(e)).toBeFalsy();
  });
});
