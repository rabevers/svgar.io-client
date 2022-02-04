<script type="ts">
    /**
     * Player component
     *
     * A player will be placed in the game map
     */

    export let playerX: number = 50;
    export let playerY: number = 50;
    export let playerR: number = 10;

    export let speed:number = 5; // Based on the mass of the player the speed can increase or decrease


    const handleMovement = event => {
        console.log("should move", event);
        if (event.clientX > playerX) {
            // player wants to go to the right.
            // Increase x by speed
            playerX += speed;
        } else if (event.clientX < playerX) {
            // player wants to go to the right.
            // Increase x by speed
            playerX -= speed;
        }

        if (event.clientY > playerY) {
            // player wants to go down.
            // Increase y by speed
            playerY += speed;
        } else if (event.clientY < playerY) {
            // player wants to go up.
            // Dencrease y by speed
            playerY -= speed;
        }
    }
</script>

<svelte:window on:mousemove={handleMovement}/>
<circle
    class="player"
    cx={playerX}
    cy={playerY}
    r={playerR}
    fill="purple"
    stroke="red"
    stroke-width=4
/>