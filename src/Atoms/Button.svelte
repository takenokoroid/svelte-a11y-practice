<script>
  export let src = "";
  export let alt = "";
  export let onClick = () => {
    console.log("onclick")
  }
</script>

<button on:click={onClick}>
  {#if src}
    <img {src} {alt} />
  {/if}
  <slot></slot>
</button>

<style>
</style>
