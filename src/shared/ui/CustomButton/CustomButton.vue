<template>
	<button @click="handleClick">send</button>
</template>
<script setup lang="ts">

const handleClick = () => {
	console.log('kek');
};
</script>
<style scoped src="./styles.scss" />