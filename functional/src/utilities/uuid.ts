import { v4 } from 'uuid';

import { Brand } from './brand';

const v4Regex =
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export type UUID = Brand<string, 'UUID'>;

export const createUuid = (uuid?: string): UUID => {
  if (uuid === '') throw new Error('UUID Invalid');
  if (uuid && !uuid.match(v4Regex)) throw new Error('UUID Invalid');
  return uuid ? (uuid as UUID) : (v4() as UUID);
};

export const isUuid = (s: any): s is UUID => {
  if (typeof s === 'string') {
    return !!s && !!s.match(v4Regex);
  }
  return false;
};
