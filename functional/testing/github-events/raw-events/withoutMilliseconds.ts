export const withoutMilliseconds = (isoStr: string) =>
  isoStr.includes('.') ? isoStr.split('.')[0] + 'Z' : isoStr;
