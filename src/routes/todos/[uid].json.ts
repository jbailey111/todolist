import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const del: RequestHandler = (request) => {
	return api(request);
};

export const patch: RequestHandler<{}, FormData> = (request) => {
	 return api(request, {
		uid: `${Date.now()}`, //TODO: set up uid with database
		created_at: new Date(),
		text: request.body.get('text'),
		done: false
	});
}