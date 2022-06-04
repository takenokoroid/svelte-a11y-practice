<script>
  import Button from "../Atoms/Button.svelte"
  export let onClick= () => {
    console.log("add")
  }
</script>

<Button {onClick}>追加</Button>