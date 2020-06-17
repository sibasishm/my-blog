import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div className="flex flex-col min-h-screen">
		<Header />
		<div className="flex-auto container mx-auto px-4">{children}</div>
		<Footer />
	</div>
);

export default Layout;
