<template>
	<div>
		<button @click="counterStore.increment(5)">+</button>
		<span>{{ counterStore.count }}</span>
		<button @click="counterStore.increment(-5)">-</button>
	</div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/../stores/index.ts';

const counterStore = useCounterStore();

</script>
