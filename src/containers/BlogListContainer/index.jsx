import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cosmic from 'cosmicjs';
import PageHeader from '../../components/PageHeader';

const BlogListContainer = () => {
	const [ pageData, setPageData ] = useState(null);

	useEffect(() => {
		const client = new Cosmic();
		const bucket = client.bucket({
			slug: process.env.BUCKET_SLUG,
			read_key: process.env.READ_KEY
		});

		bucket
			.getObjects({
				type: 'blog-posts',
				limit: 5,
				props: 'title,slug'
			})
			.then((data) => {
				console.log(data);
				setPageData(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function renderSkeleton() {
		return <p>Loading page....</p>;
	}

	function renderPage() {
		return (
			<main>
				<PageHeader>
					<h1>My Blog Posts</h1>
				</PageHeader>
				<BlogContainerBase>
					<ul>
						{pageData.objects.map((item) => {
							return (
								<li>
									<a href={`/blog/${item.slug}`}>{item.title}</a>
								</li>
							);
						})}
					</ul>
				</BlogContainerBase>
			</main>
		);
	}

	return <React.Fragment>{pageData === null ? renderSkeleton() : renderPage()}</React.Fragment>;
};

const BlogContainerBase = styled.section`
	border: 5px solid #ff8b06;
	width: 50vw;
	margin: 0 auto;
	font-size: 3rem;
	background-color: #ff8906;
	border-radius: 10px;
	padding: 2rem;
	box-shadow: 0px 7px 11px 9px rgb(0, 0, 0);

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: #fffffe;
		line-height: 50px;
		font-weight: bold;
		letter-spacing: 2px;
	}

	a:hover {
		text-decoration: underline;
	}
`;

export default BlogListContainer;
