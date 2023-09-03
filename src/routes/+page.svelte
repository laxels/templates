<script lang="ts">
	import { fetch } from '@laxels/utils';
	import { onMount } from 'svelte';
	import { getAPIOrigin } from '../lib/client';

	onMount(async () => {
		const res = await fetch('/api/sample', { baseURL: getAPIOrigin() });
		const data = await res.text();
		console.log(data);
	});
</script>

<h1>HI MOM</h1>
