/**
 * This file contains utility methods not specific to this game.
 */

/**
 * Get a random value between the min and max values
 * @param {*} min
 * @param {*} max
 * @returns
 */
export const getRandomValue = (min, max) => Math.round(Math.random() * (max - min) + min);
