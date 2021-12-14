<script>
	import TodoItem from '$lib/todo-item.svelte';
	const title = 'Todo List';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div id="container">
	<h1>{title}</h1>
	<div id="TodoItem">
		<form action="" method="">
			<input type="text" placeholder="+ Add a new Todo" name="text" aria-label="Add a todo item" />
			<TodoItem />
		</form>
	</div>
</div>
