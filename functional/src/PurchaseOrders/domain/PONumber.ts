export type PONumber = `${string}-${number}`;

export const createPONumber = (prefix: string, num: number): PONumber => {
  const paddedNumber = String(num).padStart(6, "0");
  return `${prefix}-${paddedNumber}` as PONumber;
};

export const parsePONumber = (
  poNumber: PONumber
): { prefix: string; num: number } | null => {
  if (typeof poNumber !== "string") return null;
  const [prefix, number] = poNumber.split("-");
  const parsedNumber = Number(number);
  if (!prefix.length || number?.length !== 6) return null;
  return { prefix, num: parsedNumber };
};
