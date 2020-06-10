import React from 'react';

const Card = ({
	data: { title, slug, summary, publishedDate, coverImage }
}) => {
	return (
		<div className="bg-white border rounded-lg overflow-hidden">
			<img
				src={coverImage.file.url}
				alt={coverImage.title}
				className="h-48 w-full object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold leading-tight">{title}</h3>
				<p className="mt-1 text-gray-500 text-sm">
					Published on: {publishedDate}
				</p>
				<p className="mt-2 text-gray-700">{summary}</p>
			</div>
		</div>
	);
};

export default Card;
