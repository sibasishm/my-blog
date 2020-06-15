import React from 'react';
import Image from 'gatsby-image';

const Card = ({ title, summary, publishedDate, thumbnail, link }) => {
	return (
		<div className="flex">
			<Image
				fluid={thumbnail.childImageSharp.fluid}
				className="hidden lg:block lg:w-2/5"
			/>
			<div className="relative bg-white border rounded-lg overflow-hidden lg:w-3/5 lg:rounded-none">
				<Image
					fluid={thumbnail.childImageSharp.fluid}
					className="lg:hidden"
				/>
				<div className="p-4 lg:p-8">
					<h3 className="text-xl font-semibold leading-tight lg:text-3xl">
						{title}
					</h3>
					<p className="mt-1 text-gray-500 text-sm lg:text-base">
						Published on: {publishedDate}
					</p>
					<p className="mt-2 lg:mt-6 text-gray-700 lg:text-lg">
						{summary}
					</p>
					<div className="mt-4 lg:mt-8">
						<a className="btn btn-blue" href={`blog/${link}`}>
							Continue Reading
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
