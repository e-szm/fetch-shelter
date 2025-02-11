<script lang="ts">
	import type { PageProps } from './$types';
	import Login from './Login.svelte';

	let { form }: PageProps = $props();

	$effect(() => {
		console.log(form);
	});
</script>

<main class="container">
	<Login {form} />
</main>
