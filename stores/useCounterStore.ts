import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCounterStore = defineStore('counter', () => {
	const count = ref<number>(0);
	function increment(num: number) {
		count.value += num;
	}

	return { count, increment };
});

export { useCounterStore };
