import { Brand } from './brand';

/**
 * Brands ISO8601-formatted date strings so that they are not easily
 * mixed with other strings.
 */
export type DateString = Brand<string, 'DateString'>;

export const DateString = {
  toDate(ds: DateString): Date {
    const d = new Date(ds);
    if (isNaN(d.getTime())) {
      throw new Error(`string is not formatted as a date string: ${ds}`);
    }
    return d;
  },
  toNullableDate(ds: DateString | null): Date | null {
    if (ds == null) {
      return null;
    }
    return this.toDate(ds);
  },
  fromDate(d: Date): DateString {
    return d.toISOString() as DateString;
  },
  fromNullableDate(d: Date | null): DateString | null {
    if (d == null) {
      return null;
    }
    return this.fromDate(d);
  },
  fromString(s: string): DateString {
    return this.fromDate(this.toDate(s as any));
  },
  fromNullableString(s: string | null): DateString | null {
    return this.fromNullableDate(this.toNullableDate(s as any));
  },
  now(): DateString {
    return this.fromDate(new Date());
  },
};
