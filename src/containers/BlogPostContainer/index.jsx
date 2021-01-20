import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import PageHeader from '../../components/PageHeader';
import HeaderImage from '../../components/HeaderImage';
import TextChunk from '../../components/TextChunk';

const BlogPostContainer = ({ match }) => {
	const [ pageData, setPageData ] = useState(null);

	useEffect(() => {
		const client = new Cosmic();
		const bucket = client.bucket({
			slug: process.env.BUCKET_SLUG,
			read_key: process.env.READ_KEY
		});

		bucket
			.getObject({
				slug: match.params.slug,
				props: 'title,content,metadata'
			})
			.then((data) => {
				console.log(data);
				setPageData(data.object);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	//When you have things you may or may not show, then make a function for it. Functions to render different small parts of the site

	function renderHeaderImage() {
		return <img src={pageData.metadata.headerimage.imgix_url} alt="" />;
		//return <div style={{ backgroundImage: `url(${pageData.metadata.headerimage.imgix_url})` }} />;
	}

	function renderSkeleton() {
		return <p>Loading page....</p>;
	}

	function renderPage() {
		return (
			<main>
				<PageHeader>
					<h1>{pageData.title}</h1>
				</PageHeader>
				<HeaderImage>{pageData.metadata.headerimage && renderHeaderImage()}</HeaderImage>
				<TextChunk>
					<article id="blogtext" dangerouslySetInnerHTML={{ __html: pageData.content }} />
				</TextChunk>
			</main>
		);
	}

	return <React.Fragment>{pageData === null ? renderSkeleton() : renderPage()}</React.Fragment>;
};

export default BlogPostContainer;

//<HeaderImage>{pageData.metadata.headerimage && renderHeaderImage()}</HeaderImage>
