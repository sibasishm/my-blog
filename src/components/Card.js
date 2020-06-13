import React from 'react';
import { Link } from 'gatsby';

const Card = ({
	data: { title, slug, summary, publishedDate, coverImage }
}) => {
	return (
		<div className="flex">
			<div className="hidden lg:block lg:w-2/5 lg:relative">
				<img
					src={coverImage.file.url}
					alt={coverImage.title}
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</div>
			<div className="relative bg-white border rounded-lg overflow-hidden lg:w-3/5 lg:rounded-none">
				<div className="relative bg-gray-500 pb-2/3 lg:hidden">
					<img
						src={coverImage.file.url}
						alt={coverImage.title}
						className="absolute h-full w-full object-cover"
					/>
				</div>
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
						<Link className="btn btn-blue" to={`blog/${slug}`}>
							Continue Reading
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
