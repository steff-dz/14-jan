import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import PageHeader from '../../components/PageHeader';
import TextChunk from '../../components/TextChunk';

const AboutContainer = () => {
	const [ pageData, setPageData ] = useState(null);

	useEffect(() => {
		const client = new Cosmic();
		const bucket = client.bucket({
			slug: process.env.BUCKET_SLUG,
			read_key: process.env.READ_KEY
		});

		bucket
			.getObject({
				slug: 'about-me',
				props: 'slug,title,content'
			})
			.then((data) => {
				console.log(data);
				setPageData(data.object);
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
					<h1>{pageData.title}</h1>
				</PageHeader>
				<TextChunk>
					<article dangerouslySetInnerHTML={{ __html: pageData.content }} />
				</TextChunk>
			</main>
		);
	}

	return <React.Fragment>{pageData === null ? renderSkeleton() : renderPage()}</React.Fragment>;
};

export default AboutContainer;
