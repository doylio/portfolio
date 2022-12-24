<script lang="ts">
	import anime from 'animejs/lib/anime.es.js';
	import { browser } from '$app/environment';
	import Content from './Content.svelte';

	export let isOpen = false;

	let rows = 0;
	let columns = 0;
	const CELL_SIZE = 50;
	function handleResize() {
		if (isOpen) return;
		rows = Math.floor(window.innerHeight / CELL_SIZE);
		columns = Math.floor(window.innerWidth / CELL_SIZE);
	}

	if (browser) {
		handleResize();
		window.addEventListener('resize', handleResize);
		anime({
			targets: '.title',
			opacity: 1,
			duration: 1800
		});
	}

	function handleTileClick(index: number) {
		if (!isOpen) {
			const timeline = anime.timeline({
				easing: 'easeOutExpo'
			});
			timeline
				.add({
					targets: '.tile',
					opacity: 0,
					delay: anime.stagger(30, {
						grid: [columns, rows],
						from: index
					})
				})
				.add(
					{
						targets: '.title',
						opacity: 0,
						duration: 1800
					},
					'0'
				)
				.add({
					targets: '.grid',
					zIndex: -1,
					duration: 0
				})
				.add(
					{
						targets: 'main',
						opacity: 1,
						duration: 3000
					},
					'-=1000'
				);

			isOpen = true;
		}
	}
</script>

<div class="title">
	<h1>Shawn Robert Doyle</h1>
	<h2>Full Stack Developer</h2>
</div>

<div class="grid" style="--columns: {columns}; --rows: {rows}">
	{#each Array(rows * columns) as _, i}
		<div class="tile" on:click={() => handleTileClick(i)} on:keydown={() => handleTileClick(i)} />
	{/each}
</div>

<main>
	<Content />
</main>

<style lang="scss">
	.title {
		z-index: 10;
		position: absolute;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		font-family: 'Share Tech Mono', monospace;
		color: var(--text-light);
		opacity: 0;

		h1 {
			font-size: 6rem;
		}
		h2 {
			font-size: 4vw;
		}
	}
	.grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		grid-template-rows: repeat(var(--rows), 1fr);
		grid-gap: 0.5px;
	}
	.tile {
		background: #121212;
		// opacity: 0;

		&:hover {
			opacity: 0.5;
		}
	}

	main {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
	}
</style>
