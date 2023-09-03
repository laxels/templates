<script lang="ts">
	import { enableMapSet } from 'immer';
	import '../app.css';

	enableMapSet();
</script>

<div class="relative h-full">
	<slot />
</div>
