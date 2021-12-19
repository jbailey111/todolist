import type { RequestHandler } from '@sveltejs/kit';

//TODO: Persist in databases
let todos = [];

export const get: RequestHandler = () => {
	return {
		status: 200,
		body: todos
	};
};

export const post: RequestHandler<{}, FormData> = (request) => {
	todos.push(request.body.get("text"))
    console.log(todos)
	return {
		status: 303,
		headers: {
			location: '/'
		}
	};
};
