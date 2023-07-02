import React from 'react';
import Carousel from '../composent/Carousel';

import Header from '../composent/Header';

function Home() {
	return (
		<div>
			<Header />

			<Carousel button={'Decouvrez cette civilization'} />
		</div>
	);
}

export default Home;
