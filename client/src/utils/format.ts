/**
 *TODO:
 * function formatNumber to format number to string
 * @param number
 */
export function formatNumber(number: number) {
  if (number >= 100) {
    return `${number}`;
  } else if (number < 10) {
    return `00${number}`;
  } else {
    return `0${number}`;
  }
}
