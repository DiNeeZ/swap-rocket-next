export function getUniqueByCode<T extends { code: string }>(array: T[]): T[] {
  return Array.from(new Map(array.map((item) => [item.code, item])).values());
}
