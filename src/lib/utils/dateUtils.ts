export function currentDayName(): string {
  return new Date().toLocaleDateString(undefined, { weekday: "long" });
}
