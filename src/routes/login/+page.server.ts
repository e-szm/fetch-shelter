import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');

		if (typeof name !== 'string' || typeof email !== 'string')
			return fail(400, { values: { name: '', email: '' }, message: 'Invalid information' });
		if (!name || !email)
			return fail(400, { values: { name, email }, message: 'Missing information' });

		return fail(400, { values: { name, email }, message: 'Invalid information' });

		return { success: true };
	}
} satisfies Actions;
