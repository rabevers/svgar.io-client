<script type="ts">
    /**
     * Main (or root) component for the game.
     *
     * It will function as the viewport for the map.
     */
    import { onMount } from 'svelte';
    import { player } from '../stores/game.js';

    import Map from './Map.svelte';
    import Player from './Player.svelte';

    export let width: number = 800;     // Create a default width for the map
    export let height: number = 600;    // Create a default height for the map

    let stopLoop;
    let frameCounter;

    let destination = {
        x: 0,
        y: 0,
    };

    const handleMouseMovement = event => {
        destination.x = event.clientX;
        destination.y = event.clientY;
    };

    const update = (tFrame, steps) => {
        frameCounter = tFrame;
        steps.forEach(step => {
            if (typeof step === 'function') {
                step();
            }
        });
    };

    onMount(() => {
        /**
         * Create and start a game loop
         * https://developer.mozilla.org/en-US/docs/Games/Anatomy
         */
        (function(){
            function mainLoop(tFrame) {
                stopLoop = window.requestAnimationFrame( mainLoop );
                update(tFrame, steps);
                // render();
            };

            mainLoop(0);
        })();
    });

    // @todo change this to a dynamic value based on mass
    let speed = 0.5;

    const handleMovement = () => {
        if ($player.x === destination.x && $player.y === destination.y) {
            return;
        }
        console.log("should move", event);
        if (destination.x > $player.x) {
            // player wants to go to the right.
            // Increase x by speed
            $player.x += speed;
        } else if (destination.x < $player.x) {
            // player wants to go to the right.
            // Increase x by speed
            $player.x -= speed;
        }

        if (destination.y > $player.y) {
            // player wants to go down.
            // Increase y by speed
            $player.y += speed;
        } else if (destination.y < $player.y) {
            // player wants to go up.
            // Dencrease y by speed
            $player.y -= speed;
        }
    }

    let steps = [
        handleMovement,
    ];

</script>

<svelte:window on:mousemove={handleMouseMovement}/>
<svg
    id="game"
    width={width}
    height={height}
>
    <Map>
        <Player playerX={$player.x} playerY={$player.y} />
    </Map>
</svg>

<style>
    svg {
        border: 10px solid black;
    }
</style>