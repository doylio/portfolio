<h1>
	<slot />
</h1>

<style lang="scss">
	h1 {
		margin: 50px 0;
		--text-divider-gap: 1rem;
		display: flex;
		align-items: center;
		font-size: 2rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		line-height: 1rem;

		&::before,
		&::after {
			content: '';
			height: 1px;
			background-color: var(--text-light);
			flex-grow: 1;
		}

		&::before {
			margin-right: var(--text-divider-gap);
		}

		&::after {
			margin-left: var(--text-divider-gap);
		}
	}
</style>
