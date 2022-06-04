<script>
  import Box from "../Atoms/Box.svelte";
  import Heading from "../Atoms/Heading.svelte";
  import Modal from "../Molecules/Modal.svelte";
  import Text from "../Atoms/Text.svelte";
  import Button from "../Atoms/Button.svelte";
  import { useTodo } from "../store/useTodo";

  let item = "hoge";

  export let index = "";

  const todo = useTodo;

  const deleteTodoItem = (index) => {
    todo.deleteTodo(index);
  };
</script>

<Modal>
  <Heading element="h2">Todoを削除する</Heading>
  <Box>
    <Text>{item}のTODOを削除します。よろしいですか？</Text>
  </Box>
  <Button onClick={() => deleteTodoItem(index)}>削除する</Button>
  <Button>キャンセル</Button>
</Modal>
