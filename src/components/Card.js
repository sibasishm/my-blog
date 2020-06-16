import React from 'react';
import Image from 'gatsby-image';

const Card = ({ title, summary, publishedDate, banner, link }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-1 items-center mt-8">
			<div className="hidden lg:block col-start-1 col-span-8 row-start-1">
				<Image
					sizes={{
						...banner.childImageSharp.fluid,
						aspectRatio: 16 / 9
					}}
					className="rounded-lg shadow-md"
				/>
			</div>
			<Image
				sizes={{
					...banner.childImageSharp.fluid,
					aspectRatio: 16 / 9
				}}
				className="lg:hidden rounded-lg shadow-md"
			/>
			<div className="relative px-4 md:px-8 -mt-20 lg:p-0 lg:m-0 lg:col-start-5 lg:col-span-8 lg:row-start-1">
				<div className="bg-white p-4 md:p-8 lg:py-12 rounded-lg shadow-lg">
					<a href={`/blog/${link}`}>
						<h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
							{title}
						</h3>
						<p className="mt-1 text-gray-500 text-sm lg:text-base">
							Published on: {publishedDate}
						</p>
						<p className="mt-2 lg:mt-6 text-gray-700 lg:text-lg">
							{summary}
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
