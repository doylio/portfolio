<script lang="ts">
	import { browser } from '$app/environment';
	import About from './About.svelte';
	import Skills from './Skills.svelte';
	import MyWork from './MyWork.svelte';
	import Contact from './Contact.svelte';
	import Writing from './Writing.svelte';

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
	}

	function updateActiveIndex() {
		const hash = window.location.hash;
		const index = navItems.findIndex((item) => item.href === hash);
		if (index !== -1) {
			activeIndex = index;
		}
	}

	function handleScroll(ev: Event) {
		console.log(ev);
	}
</script>

<svelte:window on:hashchange={updateActiveIndex} />

<content on:scroll={handleScroll}>
	<nav>
		<ul>
			{#each navItems as item, i}
				<li
					class:selected={activeIndex == i}
					on:mouseenter={() => (window.location.hash = item.href)}
				>
					{item.name}
				</li>
			{/each}
		</ul>
	</nav>

	<div class="content-slider" style="--offset: {-100 * activeIndex}%;">
		{#each navItems as item}
			<div class="slider-item">
				<svelte:component this={item.component} />
			</div>
		{/each}
	</div>
</content>

<style lang="scss">
	content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

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
		overflow: hidden;
		height: 100vh;
	}

	.slider-item {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 15vw;
		transform: translateY(var(--offset));
		transition: transform 0.5s ease-in-out;
	}
</style>
