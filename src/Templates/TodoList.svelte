<script>
  import Button from "../Atoms/Button.svelte";
  import Heading from "../Atoms/Heading.svelte";
  import AddTodoModal from "../Organisms/AddTodoModal.svelte";
  import Todo from "../Organisms/Todo.svelte";
  import { useTodo } from "../store/useTodo";

  const todo = useTodo;
  let isOpenAddTodoModal = false;
  export let isAutofocus=false

  const handleOpenAddTodoModal = () => {
    isOpenAddTodoModal = !isOpenAddTodoModal;
    isOpenAddTodoModal?isAutofocus=true:isAutofocus=false
    console.log(isOpenAddTodoModal);
  };
</script>

<main>
  <Heading element={"h1"}>Todoリスト</Heading>
  <Button onClick={handleOpenAddTodoModal}>追加</Button>
  {#if isOpenAddTodoModal}
    <AddTodoModal {handleOpenAddTodoModal} {isAutofocus}/>
  {/if}
  {#each $todo as todo, index (index)}
    <Todo {index} {todo} />
  {/each}
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
