<script>
  import Form from "../Atoms/Form.svelte";
  import Box from "../Atoms/Box.svelte";
  import Heading from "../Atoms/Heading.svelte";
  import Modal from "../Molecules/Modal.svelte";
  import Text from "../Atoms/Text.svelte";
  import Button from "../Atoms/Button.svelte";
  import { useTodo } from "../store/useTodo";

  export let handleOpenAddTodoModal = () => {
    console.log("handle open");
  };

  const id="dialog-label1"
  export let isAutofocus=false
  const todo = useTodo;
  let title = "";
  let detail = "";
  let deadline = "";

  const addTodoItem = () => {
    const dict = {
      title: title,
      detail: detail,
      deadline: deadline,
    };
    todo.addTodo(dict);
    handleOpenAddTodoModal();
  };
</script>

<Modal ariaLabelledby={id}>
  <Heading element="h2" {id}>Todoを追加する</Heading>
  <Box>
    <Text>タイトル</Text>
    <Form bind:value={title} {isAutofocus}/>
  </Box>
  <Box>
    <Text>詳細</Text>
    <Form bind:value={detail} />
  </Box>
  <Box>
    <Text>期限</Text>
    <Form bind:value={deadline} />
  </Box>
  <Button onClick={addTodoItem}>追加する</Button>
  <Button onClick={handleOpenAddTodoModal}>キャンセル</Button>
</Modal>
