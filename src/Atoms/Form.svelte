<script>
  export let type = "text";
  export let value = "";
  export let isAutofocus = false;
  const autofocus=isAutofocus?"autofocus":""
</script>

<input
  {type}
  on:change={(e) => {
    value = e.target.value;
  }}
  {value}
  {autofocus}
/>

<style>
</style>
