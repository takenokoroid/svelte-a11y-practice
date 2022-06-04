<script>
  export let type = "text";
  export let value = "";
</script>

<input
  {type}
  on:change={(e) => {
    value = e.target.value;
  }}
  {value}
/>

<style>
</style>
