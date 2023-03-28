const _brand = Symbol();

/**
 * A Creates a branded nominal type assignable to T tagged with string B
 *
 * ## Usage
 * ```ts
 * type UUID = Brand<string, 'UUID'>;
 *
 * const someFunc = (inString: string, inUuid: UUID) => {
 *   const correctString: string = inString; // OK
 *   const correctUuid: UUID = inUuid;       // OK
 *
 *   const okayString: string = inUuid;      // Also OK, `UUID` is assignable to `string`
 *   const wrongUuid: UUID = inString;       // Error, `string` is not assignable to `UUID`
 * }
 * ```
 */
export type Brand<T, B extends string> = T & { [_brand]: B };
