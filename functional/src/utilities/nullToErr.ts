import { err, ok, Result } from 'neverthrow';

/**
 * Maps the value to a `Result`, where `null` becomes the given error and all
 * other values become `Ok`.
 *
 * Useful for `Result` chaining.
 *
 * ## Usage
 * ```ts
 * const okResult = ok('value').andThen(nullToErr(() => new Error('Found null')));
 * // -> Ok('value')
 *
 * const errResult = ok(null).andThen(nullToErr(() => new Error('Found null')));
 * // -> Err(Error('Found null'))
 * ```
 */
export const nullToErr =
  <T, E extends Error>(fn: () => E) =>
  (value: T | null): Result<T, E> =>
    value === null ? err(fn()) : ok(value);
