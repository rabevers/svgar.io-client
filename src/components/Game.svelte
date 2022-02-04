<script type="ts">
    /**
     * Main (or root) component for the game.
     *
     * It will function as the viewport for the map.
     */
    import Map from './Map.svelte';
    import Player from './Player.svelte';

    export let width: number = 800;     // Create a default width for the map
    export let height: number = 600;    // Create a default height for the map
</script>

<svg
    id="game"
    width={width}
    height={height}
>
    <Map>
        <Player />
    </Map>
</svg>

<style>
    svg {
        border: 10px solid black;
    }
</style>