import React from 'react';
import styled from 'styled-components';

const PageHeader = ({ children }) => {
	return <PageHeaderBase>{children}</PageHeaderBase>;
};

const PageHeaderBase = styled.header`
	text-align: center;
	margin: 1rem;
	margin-top: 3rem;

	h1 {
		font-size: 7.5rem;
	}
`;

export default PageHeader;
