import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div className="bg-gray-100 h-screen">
		<div className="container mx-auto px-4">
			<Header />
			{children}
			<Footer />
		</div>
	</div>
);

export default Layout;
