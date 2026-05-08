/**
 * Utility helper functions for AlgoScope.
 * This file contains reusable functions used across components.
 */

/**
 * Calculates delay based on speed value.
 * Higher speed → lower delay.
 *
 * @param {number} speed - Speed slider value.
 * @returns {number} Delay in milliseconds.
 */
export function getDelay(speed) {
  return 1000 / speed;
}

/**
 * Clamps a number between a minimum and maximum range.
 *
 * @param {number} value - Input number.
 * @param {number} min - Minimum allowed value.
 * @param {number} max - Maximum allowed value.
 * @returns {number} Value constrained within range.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}