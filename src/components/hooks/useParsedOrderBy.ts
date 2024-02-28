// Хук который парсит строку в Объект

export const useParsedOrderBy = (orderBy: null | string) => {
  if (!orderBy) {
    return null
  }
  const [key, direction] = orderBy.split('-') as [string, 'asc' | 'desc']

  if (!key || !direction) {
    return null
  }

  return { direction, key }
}
