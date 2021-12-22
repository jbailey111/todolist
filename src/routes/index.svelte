<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/todos.json');

		if (res.ok) {
			const todos = await res.json();

			return {
				props: {
					todos
				}
			};
			const { message } = await res.json();
			return {
				error: new Error(message)
			};
		}
	};
</script>

<script lang="ts">
	import TodoItem from '$lib/todo-item.svelte';
	const title = 'Todo List';
	export let todos: Todo[];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div id="container">
	<h1 class="title">{title}</h1>
	<form action="/todos.json" method="post" class="new">
		<input type="text" placeholder="+ Add a new Todo" name="text" aria-label="Add a todo item" />
	</form>
	<div id="TodoItem">
		{#each todos as todo}
			<TodoItem {todo} />
		{/each}
	</div>
</div>

<style>
	.title {
		margin-bottom: 1em;
	}
	.new {
		margin: 0 0 0.5rem 0;
		width: 100%;
	}
	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		border-radius: 4px;
		background: none;
		text-align: center;
		border: 1px solid transparent;
		margin-bottom: 1em;
	}
	/* .container :global(input:focus-visible) {
		box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid rgb(0, 59, 252) !important;
		outline: none;
	} */
</style>
