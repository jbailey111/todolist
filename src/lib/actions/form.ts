export const enhance = (form: HTMLFormElement, { result }) => {
	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		try {
			const body = new FormData(form);
			const res = await fetch(form.action, {
				method: form.method,
				headers: {
					accept: 'application/json'
				},
				body
			});
			if (res.ok) {	
				result(res);
			} else {
				console.log(await res.json());
				console.error('Error:', await res.json());
			}
		} catch (err) {
			console.error('Fetch error: Could not submit form', err);
		}
	};

	form.addEventListener('submit', handleSubmit);

	return {
		destroy() {
			form.removeEventListener('submit', handleSubmit);
		}
	};
};
