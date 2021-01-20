import React from 'react';
import styled from 'styled-components';

const TextChunk = ({ children }) => {
	return <TextChunkBase>{children}</TextChunkBase>;
};

const TextChunkBase = styled.section`
	margin: 0 auto;
	height: 70vh;
	width: 90vw;
	overflow-x: hidden;

	#contact {
		display: flex;
		flex-direction: column;
		width: 50vw;
		margin: 0 auto;
		font-size: 2.8rem;
		padding: 1.5rem 5rem;
		background-color: #e53170;
		border-radius: 10px;
		color: #fffffe;

		li::marker {
			font-size: 2.8rem;
		}

		a {
			text-decoration: underline;
			color: #fffffe;
		}
	}

	#blogtext {
		height: fit-content;
		display: flex;
		flex-direction: column;

		p {
			width: 90%;
			padding: 1rem;
		}
	}

	article {
		display: flex;
		position: relative;
		justify-content: space-between;

		img {
			width: 600px;
			border: 2px solid white;
			border-radius: 15px;
		}

		h2 {
			margin: 0 5rem;
			font-size: 3.5rem;
			height: fit-content;
			width: 200%;
			padding: 1rem;
		}

		p {
			font-size: 3.2rem;
			width: 50vw;
			margin: 0 auto;
			padding: 2rem;
			line-height: 40px;
		}
	}
`;

export default TextChunk;
