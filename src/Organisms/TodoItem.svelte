<script>
  import Form from "../Atoms/Form.svelte";
  import Box from "../Atoms/Box.svelte";
  import Text from "../Atoms/Text.svelte";
  import Button from "../Atoms/Button.svelte";

  export let title = "";
  export let deadline = "";
  export let detail = "";

  export let handleOpenEditTodoModal = () => {
    console.log("open edit");
  };
  export let handleOpenDeleteTodoModal = () => {
    console.log("open delete");
  };
</script>

<Box>
  <Form type="checkbox" />
  <Text>{title}</Text>
  <Text>期限:{deadline}</Text>
  <Text>{detail}</Text>
  <Button onClick={handleOpenEditTodoModal}>編集</Button>
  <Button onClick={handleOpenDeleteTodoModal}>削除</Button>
</Box>
