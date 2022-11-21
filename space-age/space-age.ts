interface Dictionary {
  [key: string]: number
}

const planetaryTimesRelativesToEarth: Dictionary = {
  'earth': 31557600,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
};

export const age = (planet: string, seconds: number): number => parseFloat(((seconds / planetaryTimesRelativesToEarth['earth']) / ( (planet === "earth") ? 1 : planetaryTimesRelativesToEarth[planet])).toFixed(2));
