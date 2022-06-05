<script>
  import Form from "../Atoms/Form.svelte";
  import Box from "../Atoms/Box.svelte";
  import Text from "../Atoms/Text.svelte";
  import Button from "../Atoms/Button.svelte";

  export let title = "";
  export let deadline = "";
  export let detail = "";

  export let handleOpenEditTodoModal = () => {
    console.log("handle open");
  };
  export let handleOpenDeleteTodoModal = () => {
    console.log("handle open");
  };
</script>

<Box class="todoitem-item">
  <Form type="checkbox" />
  <Box class="todoitem-todo">
    <Box class="todoitem-title">
      <Text class="todoitem-title-text">{title}</Text>
    </Box>
    <Box class="todoitem-detail">
      <Text class="todoitem-title-detail">{detail}</Text>
    </Box>
    <Box class="todoitem-deadline">
      <Text class="todoitem-title-deadline">期限:{deadline}</Text>
    </Box>
    <Box class="todoitem-buttons">
      <Button onClick={handleOpenEditTodoModal}>編集</Button>
      <Button onClick={handleOpenDeleteTodoModal}>削除</Button>
    </Box>
  </Box>
</Box>

<style>
  :global(.todoitem-item) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  :global(.todoitem-todo) {
    display: flex;
    flex-wrap: wrap;
  }
  :global(.todoitem-title) {
    width: 50%;
  }
  :global(.todoitem-detail) {
    width: 50%;
  }
  :global(.todoitem-deadline) {
    width: 50%;
  }
  :global(.todoitem-buttons) {
    width: 50%;
  }
  :global(.todoitem-title-text) {
    font-weight: bold;
    font-size: 18pt;
    margin: 0px;
  }
  :global(.todoitem-title-detail) {
    font-size: 12pt;
    margin: 0px;
  }
  :global(.todoitem-title-deadline) {
    font-size: 12pt;
    margin: 0px;
  }
</style>
