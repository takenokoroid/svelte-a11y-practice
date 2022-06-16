<script>
  export let role=""
  export let ariaLabelledby=""
  export let ariaModal=""
</script>

<div class={$$props.class} {role} aria-labelledby={ariaLabelledby} aria-modal={ariaModal}>
  <slot></slot>
</div>

<style>
</style>