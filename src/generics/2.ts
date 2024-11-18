type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, T>
): Partial<AllType> {
  const result: Partial<AllType> = {};

  if ("name" in top || "name" in bottom) {
    result.name = (top as AllType).name || (bottom as AllType).name;
  }
  if ("position" in top || "position" in bottom) {
    result.position = (top as AllType).position || (bottom as AllType).position;
  }
  if ("color" in top || "color" in bottom) {
    result.color = (top as AllType).color || (bottom as AllType).color;
  }
  if ("weight" in top || "weight" in bottom) {
    result.weight = (top as AllType).weight || (bottom as AllType).weight;
  }

  return result;
}
