import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div className="container mx-auto px-4">
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
