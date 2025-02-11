<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		type: 'submit' | 'button';
		look: 'primary' | 'secondary' | 'dangerous' | 'link';
		children: Snippet;
	}
	let { type, look, children }: ButtonProps = $props();
</script>

<button {type} class={[look, 'text--sm']}>
	{@render children()}
</button>

<style>
	button {
		align-self: var(--align-self);

		padding: 1.2rem 1.8rem;
		margin: var(--margin);

		font-family: inherit;
		letter-spacing: 0.8px;
		font-weight: 500;

		border-radius: var(--border-radius--me);

		transition: background-color 200ms;
		cursor: pointer;
	}

	.primary {
		color: #fff;
		background-color: var(--light-blue--500);
		border: 2px solid transparent;
	}

	.primary:hover {
		background-color: var(--light-blue--700);
	}

	.secondary {
		color: var(--light-blue--500);
		background-color: #fff;
		border: 2px solid var(--light-blue--500);
	}

	.secondary:hover {
		background-color: var(--grey--100);
	}

	.dangerous {
		color: #fff;
		background-color: var(--red--700);
		border: 2px solid transparent;
	}

	.dangerous:hover {
		background-color: var(--red--900);
	}

	.link {
		color: var(--light-blue--400);
		background-color: #fff;
		border: 2px solid transparent;
	}

	.link:hover {
		color: var(--light-blue--600);
		text-decoration: underline;
	}
</style>
