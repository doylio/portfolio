<script lang="ts">
	import anime from 'animejs/lib/anime.es.js';
	import { browser } from '$app/environment';
	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import Work from './Work.svelte';
	import Contact from './Contact.svelte';
	import Writing from './Writing.svelte';
	import Home from './Home.svelte';

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
	const CELL_SIZE = 40;
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
		{ name: 'Home', id: 'home', component: Home },
		{ name: 'About', id: 'about', component: About },
		{ name: 'Skills', id: 'skills', component: Skills },
		{ name: 'Work', id: 'work', component: Work },
		{ name: 'Writing', id: 'writing', component: Writing },
		{ name: 'Contact', id: 'contact', component: Contact }
	];

	let activeIndex = 0;
	if (browser) {
		updateActiveIndex();
		scrollToSection(navItems[activeIndex].id);
	}

	function updateActiveIndex() {
		const hash = window.location.hash;
		const index = navItems.findIndex((item) => `#${item.id}` === hash);
		if (index !== -1) {
			activeIndex = index;
		}
	}

	function onSelectActiveIndex(index: number) {
		activeIndex = index;
		window.location.hash = '#' + navItems[index].id;
		scrollToSection(navItems[index].id);
	}

	function scrollToSection(sectionId: string) {
		const slider = document.querySelector('main');
		const target = document.querySelector(`#section-${sectionId}`) as HTMLElement;
		if (slider && target) {
			slider.scrollTo({
				top: target.offsetTop,
				behavior: 'smooth'
			});
		}
	}

	function handleScroll(ev: Event) {
		const slider = ev.target as HTMLElement;
		const cuttoffPoint = window.innerHeight / 2 + slider.scrollTop;
		// Find the largest offsetTop that is less than the cuttoffPoint
		const index = navItems.reduce((acc, item, i) => {
			const target = document.querySelector(`#section-${item.id}`) as HTMLElement;
			if (target.offsetTop < cuttoffPoint) {
				return i;
			}
			return acc;
		}, 0);
		if (index !== activeIndex) {
			activeIndex = index;
		}
	}
</script>

<svelte:window on:hashchange|preventDefault={updateActiveIndex} />

<div class="title">
	<h1>Shawn Robert Doyle</h1>
	<h2>Full Stack Developer</h2>
</div>

<div class="grid" style="--columns: {columns}; --rows: {rows}">
	{#each Array(rows * columns) as _, i}
		<div class="tile" on:click={() => handleTileClick(i)} on:keydown={() => handleTileClick(i)} />
	{/each}
</div>

<main on:scroll={handleScroll}>
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

	<content class="content-slider">
		{#each navItems as item}
			<div class="slider-item" id={`section-${item.id}`}>
				<div class="inner-padding">
					<svelte:component this={item.component} />
				</div>
			</div>
		{/each}
	</content>
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
		text-align: center;
		pointer-events: none;
		font-family: 'Share Tech Mono', monospace;
		color: var(--text-light);
		opacity: 0;

		h1 {
			font-size: clamp(1rem, 10vw, 8rem);
		}
		h2 {
			font-size: 6vw;
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
		overflow-y: scroll;
	}

	nav {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		left: 200px;
		right: max(80vw, calc(100vw - 200px));
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		z-index: 5;

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
		width: calc(100vw - max(200px, 20vw));
		height: 100%;
		margin-left: max(200px, 20vw);
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.slider-item {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: transform 0.5s ease-in-out;
	}

	.inner-padding {
		padding: 0 2rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		nav {
			position: fixed;
			transform: none;
			top: 0;
			left: 0;
			right: 0;
			margin: 0;
			padding: 0;
			width: 100vw;
			background: rgba(0, 0, 0, 0.3);

			ul {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				width: 100vw;
				padding: 0.7rem 0 0.5rem;

				li {
					font-size: 1rem;
					margin: 0;
				}
			}
		}

		.content-slider {
			width: 100%;
			margin-left: 0;
		}

		.slider-item {
			width: 100vw;
		}

		.inner-padding {
			padding: 0 1rem;
		}
	}

	@media screen and (max-width: 480px) {
		nav {
			ul {
				li {
					font-size: 0.8rem;
				}
			}
		}
	}
</style>
