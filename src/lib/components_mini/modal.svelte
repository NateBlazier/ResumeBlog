<script>
    export let showModal = false;
    export let message;
    export let isPromo;

//     function toggleModel() {
//   showModal = !showModal;
// }

</script>


{#if showModal}
<div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
        <slot></slot>
    </div>
</div>
{/if}



<style>

    .backdrop{
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0,0,0,0.8);

        overflow-y: scroll !important;
        margin: 0 auto !important;
        /* position: static !important; */
    }

    .modal{

        overflow-y: scroll !important;
        margin: 0 auto !important;
        position: static !important;

        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        /* margin: 10% auto; */
        text-align: center;
        background: white;
    }

</style>