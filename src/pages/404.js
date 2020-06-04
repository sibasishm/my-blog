import React from 'react';
import { Link } from 'gatsby';

import Head from '../components/Head';

const NotFound = () => (
	<>
		<Head title="404" />
		<h1>Page not found.</h1>
		<p>
			Go to <Link to="/">home page</Link>
		</p>
	</>
);

export default NotFound;
