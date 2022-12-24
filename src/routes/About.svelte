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
		height: 100%;
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
	}

	a {
		color: var(--link);
		text-decoration: underline var(--link);
		font-weight: 600;
	}
</style>
