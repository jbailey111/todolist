<script>
	import TodoItem from '$lib/todo-item.svelte';
	const title = 'Todo List';
</script>

<style>
	.new{
		margin: 0 0 0.5rem 0;
	}
	.new input{
font-size: 28px;
width:100%;
padding: 0.5em 1em 0.3em 1em;
box-sizing: border-box;
border-radius: 4px;
background: none;
text-align: center;
	}

</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div id="container">
	<h1>{title}</h1>
	<div id="TodoItem">
		<form action="" method="" class="new">
			<input type="text" placeholder="+ Add a new Todo" name="text" aria-label="Add a todo item" />
			<TodoItem />
		</form>
	</div>
</div>
