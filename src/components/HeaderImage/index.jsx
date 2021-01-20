import React from 'react';
import styled from 'styled-components';

const HeaderImage = ({ children }) => {
	return <HeaderImageBase>{children}</HeaderImageBase>;
};

const HeaderImageBase = styled.article`
	height: 60vh;
	width: 70vw;
	margin: 0 auto;
	overflow: hidden;

	image {
		object-fit: cover;
	}
`;

export default HeaderImage;
