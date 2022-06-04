<script>
  export let src = "";
  export let alt = "";
</script>

<button>
  {#if src}
    <img {src} {alt} />
  {/if}
  <slot></slot>
</button>

<style>
</style>
