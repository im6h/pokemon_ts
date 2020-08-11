export function formatNumber(number: number) {
  if (number >= 100) {
    return `${number}`;
  } else if (number < 10) {
    return `00${number}`;
  } else {
    return `0${number}`;
  }
}
