<script lang="ts">
	import China from '../assets/china.jpeg';
	import Tech from '../assets/tech.jpeg';
	import Climbing from '../assets/climbing.jpeg';
	import SectionTitle from './SectionTitle.svelte';
</script>

<div class="container">
	<SectionTitle>About Me</SectionTitle>

	<div class="row reverse">
		<div class="image">
			<img src={Tech} alt="Man sitting at a laptop" />
		</div>
		<p>
			I'm a self-taught developer. In the fast paced world of software, I believe that being able to
			learn new skills quickly is a key to success. I haven't found a technology that I've been
			unable to pick up and use in a matter of days
		</p>
	</div>

	<div class="row">
		<div class="image">
			<img src={China} alt="Me in China" />
		</div>
		<p>
			I love visiting new places and learning about other cultures. After graduating from the
			University of Toronto, I spent a year teaching English in China and backpacking around Asia. I
			currently live in Montreal, where I am learning French
		</p>
	</div>

	<div class="row reverse">
		<div class="image">
			<img src={Climbing} alt="Man rock climbing" />
		</div>
		<p>
			In my free time, you can find me rock climbing, hiking, or skiing. I'm also an amateur swing
			dancer and improv comedian. I'm always looking for new exciting experiences, so if you have
			any recommendations, please let me know!
		</p>
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.image {
		--img-size: 150px;
		width: var(--img-size);
		height: var(--img-size);
		overflow: hidden;
		border-radius: 50%;

		img {
			width: var(--img-size);
			height: var(--img-size);
			object-fit: cover;
		}
	}

	p {
		flex: 1;
		line-height: 1.5;
		font-size: 1.3rem;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	@media (max-width: 768px) {
		.row {
			gap: 1rem;
		}
		.image {
			--img-size: 125px;
		}

		p {
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		.image {
			--img-size: 100px;
		}

		p {
			font-size: 0.8rem;
		}
	}
</style>
