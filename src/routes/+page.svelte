<script lang="ts">
	import anime from 'animejs/lib/anime.es.js';
	import { browser } from '$app/environment';
	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import MyWork from './MyWork.svelte';
	import Contact from './Contact.svelte';
	import Writing from './Writing.svelte';

	if (browser) {
		// Fade in title
		anime({
			targets: '.title',
			opacity: 1,
			duration: 1800
		});
	}

	let isOpen = false;

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

	const navItems = [
		{ name: 'About', href: '#about', component: About },
		{ name: 'Skills', href: '#skills', component: Skills },
		{ name: 'My Work', href: '#my-work', component: MyWork },
		{ name: 'Writing', href: '#writing', component: Writing },
		{ name: 'Contact', href: '#contact', component: Contact }
	];

	let activeIndex = 0;
	if (browser) {
		updateActiveIndex();
		scrollToIndex(activeIndex);
	}

	function updateActiveIndex() {
		const hash = window.location.hash;
		const index = navItems.findIndex((item) => item.href === hash);
		if (index !== -1) {
			activeIndex = index;
		}
	}

	function onSelectActiveIndex(index: number) {
		activeIndex = index;
		window.location.hash = navItems[index].href;
		scrollToIndex(index);
	}

	function scrollToIndex(index: number) {
		const slider = document.querySelector('.content-slider');
		if (slider) {
			slider.scrollTo({
				top: index * window.innerHeight,
				behavior: 'smooth'
			});
		}
	}

	function handleScroll(ev: Event) {
		const slider = ev.target as HTMLElement;
		const index = Math.round(slider.scrollTop / window.innerHeight);
		if (index !== activeIndex) {
			activeIndex = index;
		}
	}
</script>

<svelte:window on:hashchange={updateActiveIndex} />

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
	<nav>
		<ul>
			{#each navItems as item, i}
				<li
					class:selected={activeIndex == i}
					on:click={() => onSelectActiveIndex(i)}
					on:keypress={() => onSelectActiveIndex(i)}
				>
					{item.name}
				</li>
			{/each}
		</ul>
	</nav>

	<div class="content-slider" on:scroll={handleScroll}>
		{#each navItems as item}
			<div class="slider-item">
				<svelte:component this={item.component} />
			</div>
		{/each}
	</div>
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

		display: grid;
		grid-template-columns: 2fr 5fr;
		grid-template-rows: 1fr;
		grid-gap: 15vw;
	}

	nav {
		padding: 25vh 0 0 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		h3 {
			font-family: 'Gravitas One';
			font-size: 2rem;
			font-weight: 400;
		}

		ul {
			font-family: 'Gayathri', 'sans-serif';
			pointer-events: all;
			list-style: none;
			padding: 0;
			margin: 0;
			font-size: 1.8rem;
			font-weight: 300;
			line-height: 1.5;
			text-align: right;

			li {
				margin: 0 0 1.5rem 0;
				transition: transform 0.2s ease-in-out;
				cursor: pointer;

				&.selected {
					transform: scale(1.3);
				}
			}
		}
	}

	.content-slider {
		position: relative;
		overflow: scroll;
		height: 100vh;
		display: grid;
		grid-template-rows: repeat(5, 100vh);
	}

	.slider-item {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 15vw;
		transition: transform 0.5s ease-in-out;
	}
</style>
