<script>
  export let element = "h1"
  export let id=""
</script>

<svelte:element this={element} {id}>
  <slot></slot>
</svelte:element>

<style>
</style>