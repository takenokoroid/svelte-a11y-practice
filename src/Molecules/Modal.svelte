<script>
  import Box from "../Atoms/Box.svelte";
</script>

<Box class="modal-overlay" />
<Box class="modal-modal">
  <slot />
</Box>

<style>
  :global(.modal-modal) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 6rem;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
  :global(.modal-overlay) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
  }
</style>
