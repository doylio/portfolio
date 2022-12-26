<script lang="ts">
	import Headshot from '../assets/headshot.jpg';
</script>

<div>
	<img src={Headshot} alt="Shawn Doyle" />
	<p>
		Hi! I'm Shawn, a full stack developer from Canada! 🇨🇦 I love working at startups and building
		products that people love. I'm currently working at{' '}<a
			href="https://mycelium.xyz"
			target="__blank">Mycelium</a
		>
	</p>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 250px;
		height: 250px;
		object-fit: cover;
		border-radius: 50%;
	}

	p {
		font-size: 1.7rem;
		text-align: center;
		line-height: 1.5;
		min-width: 0;
	}

	a {
		color: var(--link);
		text-decoration: underline var(--link);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		p {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		img {
			width: 200px;
			height: 200px;
		}
		p {
			flex: 1;
			font-size: 1.3rem;
		}
	}

	@media (max-width: 360px) {
		p {
			font-size: 1.2rem;
		}
	}
</style>
