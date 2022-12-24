<script lang="ts">
	import LinkedIn from '../assets/linkedin-logo.png';
	import Github from '../assets/github-logo.png';
</script>

<div class="container">
	<div class="button-box">
		<button class="github">
			<img src={Github} alt="Github" />
			Github
		</button>
		<button class="linkedin">
			<img src={LinkedIn} alt="LinkedIn" />
			LinkedIn
		</button>
	</div>

	<div class="text-divider">OR</div>

	<form>
		<input placeholder="Name" name="name" required />
		<input placeholder="Email" name="email" type="email" required />
		<textarea placeholder="Message" required />
		<button type="submit"> Send </button>
	</form>
</div>

<style lang="scss">
	.container {
		padding: 5px;
	}

	.button-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;

		button {
			flex: 1;
			min-width: 200px;
			color: var(--text-light);
			font-size: 1.5rem;
			padding: 10px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			transition: filter 0.2s ease-in-out;
			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				filter: brightness(1.2);
			}

			&.github {
				background-color: var(--github);
			}

			&.linkedin {
				background-color: var(--linkedin);
			}

			img {
				height: 30px;
				margin-right: 10px;
			}
		}
	}

	.text-divider {
		margin: 30px 0;
		--text-divider-gap: 1rem;
		display: flex;
		align-items: center;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		line-height: 1rem;
		font-family: Arial, Helvetica, sans-serif;

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

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;

		input,
		textarea {
			padding: 10px;
			border: none;
			border-radius: 5px;
			background-color: var(--cell);
			color: var(--alt-text-dark);
			font-size: 1rem;
			font-family: Arial, Helvetica, sans-serif;

			&:focus {
				outline: 1px solid var(--text-light);
			}
		}

		input::placeholder,
		textarea::placeholder {
			color: var(--alt-text-light);
		}

		textarea {
			resize: none;
			height: 150px;
		}

		button {
			align-self: center;
			color: var(--text-light);
			font-size: 1.5rem;
			padding: 10px 30px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			background-color: var(--action);

			&:hover {
				filter: brightness(1.2);
			}
		}
	}
</style>
