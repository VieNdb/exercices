export function humanPercentage(percentages: number[]): string[] {
  const result: number[] = percentages.map(x => Math.round(x * 100))

  return result
}
