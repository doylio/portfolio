<script lang="ts">
	import ReactApolloImage from '../assets/apollo.png';
	import LaptopImage from '../assets/laptop.jpeg';
	import NftImage from '../assets/nft.jpeg';
	import SectionTitle from './SectionTitle.svelte';

	const articles = [
		{
			title: 'Optimal Design Pattern for React and Apollo',
			date: '2020-05-21',
			url: 'https://medium.com/swlh/optimal-design-pattern-for-react-apollo-d5026b200928',
			image: ReactApolloImage,
			blurb:
				'If you’re used to using React with simple asynchronous REST calls, using the Apollo Client library can be a bit overwhelming. There’s the schema to handle, Observables, Query and Mutation hooks, optimistic UI and so much more. It’s a very powerful library when properly implemented.'
		},
		{
			title: 'How to get into Software Development without a degree',
			date: '2021-08-12',
			url: 'https://medium.com/@doylio/how-to-get-into-software-development-without-a-degree-6282148aa8e3',
			image: LaptopImage,
			blurb:
				'If you’re thinking about making a career change, you’ve likely Googled things like “highest paid industries”, “future proof jobs” or “fastest growing careers”. And there is one job that will come up on all of these lists: Software Developer (also called Software Engineer)'
		},
		{
			title: 'Methods for NFT masked minting',
			date: '2021-10-29',
			url: 'https://medium.com/coinmonks/methods-for-nft-masked-minting-ddd05dceed32',
			image: NftImage,
			blurb:
				'A very desirable feature of a lot of NFT projects is having an element of surprise in the minting process. This replicates the experience of buying collector’s cards, where you purchase a pack with a random assortment of cards. Part of the fun is the random draw, so it is important that users cannot determine anything about their NFT ahead of time. In this post, I’ve outlined several methods of doing that.'
		}
	];
</script>

<div>
	<SectionTitle>My Writing</SectionTitle>
	<div class="articles">
		{#each articles as article}
			<a class="article" href={article.url} target="__blank">
				<img src={article.image} alt={article.title} />
				<div class="article-info">
					<h3>{article.title}</h3>
					<div class="date">{article.date}</div>
					<div class="blurb">{article.blurb}</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.articles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 10px;
		font-family: 'Roboto', sans-serif;
	}

	.article {
		height: 150px;
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 0.5rem;
		padding: 1rem;
		transition: all 0.2s ease-in-out;
		overflow: hidden;

		img {
			width: 140px;
			height: 140px;
			object-fit: cover;
			border-radius: 0.5rem;
			background-color: #fff;
		}

		&:hover {
			transform: scale(1.01);
		}

		.article-info {
			display: flex;
			flex-direction: column;
			color: var(--alt-text-dark);

			h3 {
				font-size: 1.2rem;
				margin: 0;
			}

			.blurb {
				font-size: 0.9rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}
		}

		.date {
			font-size: 0.8rem;
			color: var(--alt-text-light);
		}
	}

	@media screen and (max-width: 480px) {
		.article {
			height: 100px;

			img {
				width: 80px;
				height: 80px;
			}

			.article-info {
				h3 {
					font-size: 1rem;
				}

				.date {
					font-size: 0.7rem;
				}

				.blurb {
					font-size: 0.8rem;
					line-height: 1.2rem;
					-webkit-line-clamp: 2;
				}
			}
		}
	}
</style>
