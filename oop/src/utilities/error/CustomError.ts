/**
 * This CustomError type can safely be extened and your custom errors
 * will show up nicely in logs and anywhere else for that matter.
 *
 * Javascript errors break the prototype chain so if you want nice
 * errors that you can extend you need to do some work to restore it.
 *
 * shamelessly stolen from https://stackoverflow.com/a/48342359
 *****************/
export abstract class CustomError extends Error {
  constructor(message?: string) {
    // 'Error' breaks prototype chain here
    super(message);

    // restore prototype chain
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      (this as any).__proto__ = actualProto;
    }
  }
}
