<script lang="ts">
	import LinkedIn from '../assets/linkedin-logo.png';
	import Github from '../assets/github-logo.png';
	import SectionTitle from './SectionTitle.svelte';
	import { toast } from '@zerodevx/svelte-toast';

	let messageSent = false;

	async function handleSubmit(event: any) {
		const formData = new FormData(event.target as HTMLFormElement);
		const request = new XMLHttpRequest();
		request.open('POST', '/?/message');
		request.onerror = () => {
			errorToast();
		};
		request.onload = () => {
			if (request.status === 200) {
				messageSent = true;
			} else {
				errorToast();
			}
		};
		request.send(formData);
	}

	function errorToast() {
		toast.push('Error sending message', {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': '#e74c3c',
				'--toastBarBackground': '#c0392b'
			},
			duration: 5000
		});
	}
</script>

<div class="container">
	<SectionTitle>Contact Me</SectionTitle>

	<div class="button-box">
		<a class="github" href="https://github.com/doylio" target="_blank" rel="noreferrer">
			<img src={Github} alt="Github" />
			Github
		</a>
		<a
			class="linkedin"
			href="https://www.linkedin.com/in/shawnrobertdoyle/"
			target="_blank"
			rel="noreferrer"
		>
			<img src={LinkedIn} alt="LinkedIn" />
			LinkedIn
		</a>
	</div>

	<br />

	<div>
		<div class="subtitle" class:hidden={messageSent}>Send a message</div>

		<form on:submit|preventDefault={handleSubmit} class:hidden={messageSent}>
			<input placeholder="Name" name="name" required />
			<input placeholder="Email" name="email" type="email" required />
			<textarea placeholder="Message" name="message" required />
			<button type="submit"> Send </button>
		</form>

		<div class="subtitle centered" class:hidden={!messageSent}>Thanks for the message! :)</div>
	</div>
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

		a {
			text-decoration: none;
			font-family: 'Roboto', sans-serif;
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

	.subtitle {
		text-align: center;
		font-size: 1.5rem;
		margin: 20px 0;
	}

	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}

	.hidden {
		visibility: hidden;
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
			transition: filter 0.2s ease-in-out;
			background-color: var(--action);

			&:hover {
				filter: brightness(1.2);
			}
		}
	}
</style>
