import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteNavigation = () => {
	return (
		<NavBase>
			<ul>
				<NavLink className="nav-item" to="/">
					<li>Home</li>
				</NavLink>
				<NavLink className="nav-item" to="/about">
					<li>About</li>
				</NavLink>
				<NavLink className="nav-item" to="/contact">
					<li>Contact</li>
				</NavLink>
				<NavLink className="nav-item" to="/blog">
					<li>Blog</li>
				</NavLink>
			</ul>
		</NavBase>
	);
};

const NavBase = styled.nav`
	background-color: #0f0e17;
	height: 8vh;

	ul {
		display: flex;
		justify-content: flex-start;
		padding-left: 2rem;
		gap: 1rem;
		align-items: flex-end;
		height: 100%;
		font-size: 3rem;
		list-style: none;
	}

	.nav-item {
		text-decoration: none;
		color: #fffffe;
		font-weight: bold;
		background-color: #f25f4c;
		padding: .5rem 1.5rem;
		border-radius: 5px;
		box-shadow: -3px 7px 9px -1px rgba(0, 0, 0, 0.61);

		&:hover {
			opacity: .5;
		}
	}
`;

export default SiteNavigation;
