import React from 'react';

const Card = ({ title, summary, publishedDate, thumbnail, link }) => {
	return (
		<div className="flex">
			<div className="hidden lg:block lg:w-2/5 lg:relative">
				<img
					src={thumbnail}
					alt={title}
					className="absolute inset-0 w-full h-full object-cover"
				/>
			</div>
			<div className="bg-white border rounded-lg overflow-hidden lg:w-3/5 lg:rounded-none">
				<div className="relative bg-gray-500 pb-2/3 lg:hidden">
					<img
						src={thumbnail}
						alt={title}
						className="absolute w-full h-full object-cover"
					/>
				</div>
				<div className="px-4 py-6 lg:px-8 lg:py-16">
					<h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
						{title}
					</h3>
					<p className="mt-1 text-gray-500 text-sm lg:text-base">
						Published on: {publishedDate}
					</p>
					<p className="mt-2 lg:mt-6 text-gray-700 lg:text-lg">
						{summary}
					</p>
					<div className="mt-4 lg:mt-8">
						<a className="btn btn-blue" href={`/blog/${link}`}>
							Continue Reading
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
