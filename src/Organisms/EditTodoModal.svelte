<script>
  import Form from "../Atoms/Form.svelte";
  import Box from "../Atoms/Box.svelte";
  import Heading from "../Atoms/Heading.svelte";
  import Modal from "../Molecules/Modal.svelte";
  import Text from "../Atoms/Text.svelte";
  import Button from "../Atoms/Button.svelte";
  import { useTodo } from "../store/useTodo";

  export let index = "";
  export let handleOpenEditTodoModal = () => {
    console.log("handle open");
  };

  const todo = useTodo;
  let title = $todo[index].title;
  let detail = $todo[index].detail;
  let deadline = $todo[index].deadline;

  const editTodoItem = (index) => {
    const dict = {
      title: title,
      detail: detail,
      deadline: deadline,
    };
    todo.editTodo(dict, index);
  };
</script>

<Modal>
  <Heading element="h2">Todoを編集する</Heading>
  <Box>
    <Text>タイトル</Text>
    <Form bind:value={title} />
  </Box>
  <Box>
    <Text>詳細</Text>
    <Form bind:value={detail} />
  </Box>
  <Box>
    <Text>期限</Text>
    <Form bind:value={deadline} />
  </Box>
  <Button onClick={() => editTodoItem(index)}>編集する</Button>
  <Button onClick={handleOpenEditTodoModal}>キャンセル</Button>
</Modal>
