<script type="ts">
    /**
     * Player component
     *
     * A player will be placed in the game map
     */

    export let playerX = 50;
    export let playerY = 50;
    export let playerR = 10;
</script>

<circle
    class="player"
    cx={playerX}
    cy={playerY}
    r={playerR}
    fill="purple"
    stroke="red"
    stroke-width=4
/>