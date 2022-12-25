<script lang="ts">
	import Opslock from '../assets/opslock.png';
	import Mycelium from '../assets/mycelium.svg';
	import Hackathon from '../assets/hackathon.jpeg';
	import SectionTitle from './SectionTitle.svelte';
</script>

<div class="container">
	<SectionTitle>My Work</SectionTitle>
	<div class="row">
		<img src={Opslock} alt="Opslock" />
		<div class="info">
			<h1>Opslock</h1>
			<p>
				As the third hire at <a href="https://www.opslock.com/" target="_blank" rel="noreferrer"
					>Opslock</a
				>, I helped grow the company and built mission critical parts of the codebase. Later as a
				tech lead, I led a team of 5 developers to achieve sprint goals and create clean,
				maintainable code
			</p>
		</div>
	</div>

	<div class="row reverse">
		<img src={Mycelium} alt="Mycelium" />
		<div class="info">
			<h1>Mycelium</h1>
			<p>
				I helped Mycelium launch the <a
					href="https://swaps.mycelium.xyz/"
					target="_blank"
					rel="noreferrer">Perpetual Swaps</a
				> product ($1B+ of trading volume), working across the stack on the smart contracts, web client,
				and backend infrastructure
			</p>
		</div>
	</div>

	<div class="row">
		<img src={Hackathon} alt="Me at the ETH Toronto Hackathon" />
		<div class="info">
			<h1>Hackathons</h1>
			<p>I've been a part of many hackathons and have even won a few:</p>
			<ul>
				<li>ETH Toronto 2022 ⸱ $20K Winner</li>
				<li>Mycelium 2021 ⸱ 1st Place</li>
				<li>Opslock 2021 ⸱ 1st Place</li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 2rem;
	}
	.row {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		gap: 1rem;
		transition: transform 0.1s;

		&.reverse {
			flex-direction: row-reverse;
		}

		img {
			height: 150px;
			border-radius: 6px;
		}
	}

	.row .info {
		h1 {
			margin: 0.5rem 0;
		}

		p {
			margin: 0;

			a {
				color: var(--link);
				text-decoration: underline;
			}
		}

		ul {
			margin: 0;
		}
	}
</style>
