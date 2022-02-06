/**
 * This file contains game specific logic
 */
import { getRandomValue } from "./utils";

/**
 * Create a food object
 * It has to be placed on the map so the function needs
 * to know what the max width and height of the map are.
 *
 * @param {number} mapWidth
 * @param {number} mapHeight
 * @param {string} color
 * @returns Object
 */
export const createFood = (mapWidth, mapHeight, color) => {
    return {
        x : getRandomValue(1, mapWidth),
        y : getRandomValue(1, mapHeight),
        color: color,
    }
}

/**
 * Create an array with a  number of food objects
 * @param {number} amount
 * @returns
 */
export const generateFood = (amount, mapWidth, mapHeight, foodColors) => {
    let foodArray = [];
    for (let x = 0; x<amount; x++) {
        foodArray.push(
            createFood(
                mapWidth,
                mapHeight,
                foodColors[getRandomValue(0, foodColors.length-1)]
            )
        )
	}
    return foodArray;
}