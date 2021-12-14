<script>
	import TodoItem from '$lib/todo-item.svelte';

    const title = "Todo List"
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<form action="" method="">
	<input type="text" placeholder="+ Add a new Todo" name="text" aria-label="Add a todo item" />
	<TodoItem />
</form>
