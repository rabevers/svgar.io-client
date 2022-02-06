<script type="ts">
    /**
     * Food component
     *
     */

    export let foodX: number = 150;
    export let foodY: number = 150;
    export let foodR: number = 10;
    export let color: string = '#af0fcd';
</script>

<circle
    class="food"
    cx={foodX}
    cy={foodY}
    r={foodR}
    fill={color}
    stroke="red"
    stroke-width=4
/>