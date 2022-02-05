<script type="ts">
    /**
     * Food component
     *
     */

    export let foodX: number = 150;
    export let foodY: number = 150;
    export let foodR: number = 10;

</script>

<circle
    class="food"
    cx={foodX}
    cy={foodY}
    r={foodR}
    fill="orange"
    stroke="red"
    stroke-width=4
/>