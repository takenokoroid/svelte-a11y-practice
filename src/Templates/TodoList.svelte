<script>
  import Button from "../Atoms/Button.svelte";
  import Heading from "../Atoms/Heading.svelte";
  import AddTodoModal from "../Organisms/AddTodoModal.svelte";
  import EditTodoModal from "../Organisms/EditTodoModal.svelte";
  import DeleteTodoModal from "../Organisms/DeleteTodoModal.svelte";
  import TodoItem from "../Organisms/TodoItem.svelte";
  import { useTodo } from "../store/useTodo";

  const todo = useTodo;
  let isOpenAddTodoModal = false;
  let isOpenEditTodoModal = false;
  let isOpenDeleteTodoModal = false;

  const handleOpenAddTodoModal = () => {
    isOpenAddTodoModal = !isOpenAddTodoModal;
    console.log(isOpenAddTodoModal);
  };
  const handleOpenEditTodoModal = () => {
    isOpenEditTodoModal = !isOpenEditTodoModal;
    console.log(isOpenEditTodoModal);
  };
  const handleOpenDeleteTodoModal = () => {
    isOpenDeleteTodoModal = !isOpenDeleteTodoModal;
    console.log(isOpenDeleteTodoModal);
  };
</script>

<main>
  <Heading element={"h1"}>Todoリスト</Heading>
  <Button onClick={handleOpenAddTodoModal}>追加</Button>
  {#each $todo as todo, index (index)}
    <TodoItem {...todo} {handleOpenEditTodoModal} {handleOpenDeleteTodoModal} />
    {#if isOpenEditTodoModal}
      <EditTodoModal {index} />
    {/if}
    {#if isOpenDeleteTodoModal}
      <DeleteTodoModal {index} />
    {/if}
  {/each}
  {#if isOpenAddTodoModal}
    <AddTodoModal />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
