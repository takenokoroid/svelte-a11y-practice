<script>
  import EditTodoModal from "../Organisms/EditTodoModal.svelte";
  import DeleteTodoModal from "../Organisms/DeleteTodoModal.svelte";
  import TodoItem from "../Organisms/TodoItem.svelte";

  export let index = 0;
  export let todo;

  let isOpenEditTodoModal = false;
  let isOpenDeleteTodoModal = false;

  const handleOpenEditTodoModal = () => {
    isOpenEditTodoModal = !isOpenEditTodoModal;
    console.log(isOpenEditTodoModal);
  };
  const handleOpenDeleteTodoModal = () => {
    isOpenDeleteTodoModal = !isOpenDeleteTodoModal;
    console.log(isOpenDeleteTodoModal);
  };
</script>

<TodoItem {...todo} {handleOpenEditTodoModal} {handleOpenDeleteTodoModal} />
{#if isOpenEditTodoModal}
  <EditTodoModal {index} {handleOpenEditTodoModal} />
{/if}
{#if isOpenDeleteTodoModal}
  <DeleteTodoModal {index} {handleOpenDeleteTodoModal} />
{/if}

<style>
</style>
