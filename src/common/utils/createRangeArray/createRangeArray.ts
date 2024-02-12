/**
 * Creates an array of numbers within a specified range.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} - The array of numbers within the specified range.
 */
export const createRangeArray = (start: number, end: number): number[] => {
  const array: number[] = []

  for (let i = start; i <= end; i++) {
    array.push(i)
  }

  return array
}
