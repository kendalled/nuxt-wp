/**
 * Rounds a number to the specified decimal places using half-up rounding.
 * @param {number} value
 * @param {number} decimals
 * @returns {number}
 */
export function roundHalfUp(value, decimals = 2) {
  if (typeof value !== 'number' || typeof decimals !== 'number') return value
  const factor = Math.pow(10, decimals)
  return Math.round(value * factor) / factor
}

/**
 * Converts cents (integer) to dollars (number) with rounding.
 * @param {number} cents
 * @param {number} decimals
 * @returns {number}
 */
export function centsToDollars(cents, decimals = 2) {
  const dollars = (cents || 0) / 100
  return roundHalfUp(dollars, decimals)
}

/**
 * Ensures a finite number; returns fallback (0) if NaN/Infinity.
 * @param {number} value
 * @param {number} fallback
 * @returns {number}
 */
export function safeNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback
}


