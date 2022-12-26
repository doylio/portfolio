<script lang="ts">
	import EthLogo from '../assets/ethereum-eth-logo.svg';
	import SvelteLogo from '../assets/svelte.svg';
	import TypeScriptLogo from '../assets/typescript-logo.svg';
	import DockerLogo from '../assets/docker-logo.webp';
	import ReactLogo from '../assets/react-logo.png';
	import NodeLogo from '../assets/nodejs-logo.png';
	import MongoLogo from '../assets/mongodb.svg';
	import PostgresLogo from '../assets/Postgresql-logo.png';
	import PythonLogo from '../assets/Python-logo.png';
	import GitLogo from '../assets/git-logo.svg';
	import GoLogo from '../assets/go-logo.png';
	import GoogleCloudLogo from '../assets/google-cloud-logo.png';
	import GraphQLLogo from '../assets/graphql-logo.png';
	import SolidityLogo from '../assets/solidity-logo.png';
	import TailwindLogo from '../assets/tailwind-logo.png';
	import ChainlinkLogo from '../assets/chainlink-logo.png';
	import FoundryLogo from '../assets/foundry-logo.png';
	import HardhatLogo from '../assets/hardhat-logo.png';
	import ReduxLogo from '../assets/redux-logo.png';
	import SectionTitle from './SectionTitle.svelte';

	let label = 'And More...';

	const skills = [
		{ name: 'MongoDB', image: MongoLogo, tags: ['backend'] },
		{
			name: 'TypeScript',
			image: TypeScriptLogo,
			tags: ['frontend']
		},
		{
			name: 'ERC-20/721/1155',
			image: EthLogo,
			tags: ['web3']
		},
		{ name: 'Node.js', image: NodeLogo, tags: ['backend'] },
		{ name: 'Python', image: PythonLogo, tags: ['backend'] },
		{ name: 'Go', image: GoLogo, tags: ['backend'] },
		{ name: 'React', image: ReactLogo, tags: ['frontend'] },
		{ name: 'PostgreSQL', image: PostgresLogo, tags: ['backend'] },
		{ name: 'Solidity', image: SolidityLogo, tags: ['web3'] },
		{ name: 'Svelte', image: SvelteLogo, tags: ['frontend'] },
		{ name: 'Chainlink', image: ChainlinkLogo, tags: ['web3'] },
		{ name: 'Docker', image: DockerLogo, tags: ['backend'] },
		{ name: 'Foundry', image: FoundryLogo, tags: ['web3'] },
		{ name: 'GraphQL', image: GraphQLLogo, tags: ['frontend'] },
		{ name: 'Git', image: GitLogo, tags: ['backend'] },
		{ name: 'Redux', image: ReduxLogo, tags: ['frontend'] },
		{ name: 'Hardhat', image: HardhatLogo, tags: ['web3'] },
		{ name: 'Google Cloud', image: GoogleCloudLogo, tags: ['backend'] },
		{ name: 'Tailwind CSS', image: TailwindLogo, tags: ['frontend'] }
	];

	let skillTags = [
		{ name: 'Frontend', value: 'frontend' },
		{ name: 'Backend', value: 'backend' },
		{ name: 'Web3', value: 'web3' }
	];

	let activeTag = '';
</script>

<div>
	<SectionTitle>My Skills</SectionTitle>

	<h3>
		{#each skillTags as tag}
			<span on:mouseenter={() => (activeTag = tag.value)} on:mouseleave={() => (activeTag = '')}
				>{tag.name}</span
			>
			{#if tag !== skillTags[skillTags.length - 1]}
				{` ⸱ `}
			{/if}
		{/each}
	</h3>

	<div class="skills-container">
		{#each skills as skill, i}
			<img
				src={skill.image}
				alt={skill.name}
				on:mouseenter={() => (label = skill.name)}
				on:mouseleave={() => (label = 'And More...')}
				class:highlight={skill.tags.includes(activeTag)}
				class:diminish={activeTag !== '' && !skill.tags.includes(activeTag)}
			/>
		{/each}
	</div>
	<h2>{label}</h2>
</div>

<style lang="scss">
	h2 {
		font-size: 1.5rem;
		color: var(--text-light);
		text-align: center;
	}

	h3 {
		font-size: 1.7rem;
		color: var(--text-dark);
		text-align: center;
		span {
			color: var(--text-light);
			cursor: pointer;

			&:hover {
				color: var(--text-dark);
			}
		}
	}

	.skills-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		img {
			height: calc(5vh + 5vw);
			padding: 10px;
			transition: transform 0.2s ease-in-out;

			&:hover {
				transform: scale(1.2);
			}
		}

		.highlight {
			transform: scale(1);
		}

		.diminish {
			transform: scale(0);
		}
	}

	h1 {
		font-size: 2.5rem;
		text-align: center;
	}

	@media (max-width: 480px) {
		img {
			height: 6vw;
		}
	}
</style>
