import React from 'react';

import {Link} from 'react-router-dom';

const Layout = ({children}) => (
	<>
		<nav>
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/about'>About</Link></li>
			<li><Link to='/feedback'>Feedback</Link></li>
		</ul>
		</nav>
		<div>{children}</div>
	</>
);

export default Layout;