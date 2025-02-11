<script lang="ts">
	import type { ActionData } from './$types';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	interface LoginProps {
		form: ActionData;
	}

	let { form }: LoginProps = $props();
</script>

<div class="hero grid--2-col">
	<div class="hero-content">
		<h1>Welcome Back</h1>
		<p class="text--lg">Please log in to find your new family member.</p>
		<form method="POST">
			<Input
				name="name"
				label="Name"
				type="text"
				required={true}
				value={form?.values?.name || ''}
			/>
			<Input
				name="email"
				label="Email"
				type="email"
				required={true}
				value={form?.values?.email || ''}
			/>
			<Button type="submit" look="primary" --margin="2.8rem 0 0 0" --align-self="flex-end"
				>Log In</Button
			>
		</form>
		{#if form?.message}
			<p class="error">{form.message}</p>
		{/if}
	</div>
	<img src="/hero-img.jpg" alt="Dog looking out the car window" />
</div>

<style>
	.hero {
		column-gap: 2.4rem;

		max-width: 98rem;
		margin: 0 auto;
		padding: 0.8rem;

		background-color: #fff;
		border-radius: var(--border-radius--xl);
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2.4rem;

		padding: 3.2rem;
	}

	.hero-content p {
		margin-bottom: 3rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero img {
		max-width: 100%;
		border-radius: var(--border-radius--xl);
	}

	.error {
		color: var(--red--500);
	}
</style>
