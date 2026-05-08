/**
 * Utility helper functions for AlgoScope
 * This file contains reusable functions used across components.
 */

/**
 * Calculates delay based on speed value.
 *
 * @param {number} speed - Speed slider value.
 * @returns {number} Delay in milliseconds.
 */
export function getDelay(speed) {
  return 1000 / speed;
}

/**
 * Clamps a number between min and max values.
 *
 * @param {number} value - Input number.
 * @param {number} min - Minimum limit.
 * @param {number} max - Maximum limit.
 * @returns {number} Clamped value.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
