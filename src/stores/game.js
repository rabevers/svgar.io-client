import { writable } from 'svelte/store';

export const player = writable({
    x: 0,
    y: 0,
    mass: 100,
});