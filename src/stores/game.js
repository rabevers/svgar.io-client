import { writable } from 'svelte/store';
import { getRandomValue } from '../utils';

export const player = writable({
    x: 0,
    y: 0,
    mass: 100,
});

/**
 * Array with some default colours for food
 */
export const foodColors = [
    '#0ffd00',
    '#fe2e2e',
    '#ffc213',
    '#ffd300',
    '#00ffff',
    '#00a86b',
];

export const world = writable({
    food: [
        {
            x: 100,
            y: 100,
            color: foodColors[getRandomValue(0, foodColors.length-1)],
        },
        {
            x: 200,
            y: 100,
            color: foodColors[getRandomValue(0, foodColors.length-1)],
        },
        {
            x: 300,
            y: 100,
            color: foodColors[getRandomValue(0, foodColors.length-1)],
        },
        {
            x: 400,
            y: 100,
            color: foodColors[getRandomValue(0, foodColors.length-1)]
        },
        {
            x: 500,
            y: 100,
            color: foodColors[getRandomValue(0, foodColors.length-1)],
        },
        {
            x: 600,
            y: 200,
            color: foodColors[getRandomValue(0, foodColors.length-1)],
        },
    ]
});