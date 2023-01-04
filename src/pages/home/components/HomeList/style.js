import styled from "styled-components";

export const StyledHomeList = styled.section`
	padding: 40px 30px;

	h1 {
		font-size: 2rem;
		letter-spacing: 2px;
		font-family: var(--font-family-1);
		color: var(--secundary100);
		margin-bottom: 20px;
	}

	ul {
		padding-right: 10px;
		padding-bottom: 10px;
		display: flex;
		overflow: auto;
		gap: 40px;
		scroll-behavior: smooth;

		&::-webkit-scrollbar {
			height: 14px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--primary100);
		}
	}

	@media (min-width: 780px) {
		padding: 80px 60px;

		ul {
			padding-right: 10px;
			gap: 60px;
		}
	}

	@media (min-width: 400px) {
		h1 {
			font-size: 2.5rem;
		}
	}
`;

export const StyledHomeCard = styled.a`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	max-width: min(300px, 100%);
	gap: 20px;
	margin: 40px 0;

	.card {
		display: flex;
		gap: 20px;
		flex-direction: column;
		justify-content: flex-end;
		transition: 0.5s ease;
	}

	.card-header {
		position: relative;
		overflow: hidden;

		&:hover {
			span {
				transform: translateY(0);
			}
		}

		img {
			z-index: 5;
			transition: 0.5s ease;

			&:hover {
				transform: scale(1.1);
			}
		}

		span {
			transition: 0.3s ease;
			position: absolute;
			bottom: 0;
			padding: 15px;
			font-size: 1.2rem;
			display: block;
			pointer-events: none;
			z-index: 10;
			width: 100%;
			font-family: var(--font-family-1);
			transform: translateY(100%);
			text-align: center;
			color: var(--primary100);
			background-color: var(--primary200);
		}
	}

	.card-body {
		h2 {
			color: var(--black100);
			font-size: 1.3rem;
			font-weight: bold;
			margin-bottom: 10px;
		}

		p {
			font-size: 0.875rem;
			font-family: var(--font-family-2);
			color: var(--black100);
		}
	}

	.card-footer {
		display: flex;
		flex-direction: column;
		gap: 26px;

		.percentage {
			font-size: 3.5rem;
			color: var(--secundary100);
			font-family: var(--font-family-1);
			position: relative;
		}

		.bar-grey {
			position: absolute;
			left: 0;
			bottom: -10px;
			width: 100%;
			height: 4px;
			background-color: #d9d9d9;
		}

		.bar-color {
			position: absolute;
			left: 0;
			bottom: -10px;
			height: 4px;
			width: 100%;
			background-color: var(--secundary100);
			z-index: 10;
			animation: percentage 2s ease forwards;
		}
	}

	.stats {
		font-weight: bold;
		color: var(--secundary100);
		display: flex;
		align-items: center;
		gap: 20px;
	}

	@keyframes percentage {
		from {
			width: 0%;
		}
	}
`;
