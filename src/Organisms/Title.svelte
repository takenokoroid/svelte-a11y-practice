<script>
  import Heading from "../Atoms/Heading.svelte"

  export let element
</script>

<Heading {element}>
  <slot></slot>
</Heading>

<style>

</style>