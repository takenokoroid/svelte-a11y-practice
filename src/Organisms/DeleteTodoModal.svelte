<script>
  import Box from "../Atoms/Box.svelte";
  import Heading from "../Atoms/Heading.svelte";
  import Modal from "../Molecules/Modal.svelte";
  import Text from "../Atoms/Text.svelte";
  import Button from "../Atoms/Button.svelte";
  import { useTodo } from "../store/useTodo";

  export let index = "";
  export let handleOpenDeleteTodoModal = () => {
    console.log("handle open");
  };

  const todo = useTodo;

  const deleteTodoItem = (index) => {
    todo.deleteTodo(index);
    handleOpenDeleteTodoModal();
  };
</script>

<Modal>
  <Heading element="h2">Todoを削除する</Heading>
  <Box>
    <Text>{$todo[index].title}のTODOを削除します。よろしいですか？</Text>
  </Box>
  <Button onClick={() => deleteTodoItem(index)}>削除する</Button>
  <Button onClick={handleOpenDeleteTodoModal}>キャンセル</Button>
</Modal>
