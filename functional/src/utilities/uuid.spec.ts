import { v4 } from 'uuid';
import { createUuid, isUuid } from './uuid';

describe('Custom UUID type', () => {
  it('Creates a new uuid', () => {
    const id = createUuid();
    const v4 = new RegExp(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    );

    expect(id.match(v4)).toBeTruthy();
  });

  it('Creates a uuid successfully from a string', () => {
    const idString = '2465fdd7-e581-436f-98f3-516bd8d6fd02';
    const id = createUuid(idString);
    expect(id).toBe(idString);
  });
  it('Prevents invalid uuid creation', () => {
    const invalidIdString = 'NOT A ID';
    expect(() => createUuid(invalidIdString)).toThrow('UUID Invalid');
  });
  it('Prevents invalid UUID creation for empty string', () => {
    expect(() => createUuid('')).toThrow('UUID Invalid');
  });

  describe('isUuid', () => {
    it('fails when invalid string', () => {
      expect(isUuid('hello')).toBeFalsy();
    });
    it('succeeds when valid', () => {
      expect(isUuid(v4())).toBeTruthy();
    });
    it('fails when input is null', () => {
      expect(isUuid(null)).toBeFalsy();
    });
    it('fails when input is object', () => {
      expect(isUuid({})).toBeFalsy();
    });
  });
});
