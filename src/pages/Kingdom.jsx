import React from 'react';
import { useParams } from 'react-router';
import datas from '../assets/data.json';
import Header from '../composent/Header';
import Carousel from '../composent/Carousel';
import Footer from '../composent/Footer';
import { Link } from 'react-router-dom';
function Kingdom() {
	const id = useParams();

	const kingdomInfos = datas.find((data) => data.id === id.id);

	const factsList = kingdomInfos?.facts.map((fact, index) => <li key={index}>{fact}</li>);

	return (
		<div className="kingdom_wrapper">
			<Header />
			<div className="content_container">
				<div className="kingdom_top_wrapper">
					<div className="top_wrappersub_wrapper">
						<div className="kingdom_image">
							<img
								src={kingdomInfos.img}
								alt="kingdom"
							/>
						</div>
						<div className="kingdom_content_top">
							<h3>{kingdomInfos.title}</h3>
							<h4>{kingdomInfos.dates}</h4>
							<div className="span"></div>
							<p>{kingdomInfos.description}</p>
						</div>
					</div>
				</div>
				<div className="kingdom_content_middle">
					<div className="content_middle_facts">
						<h3>Facts</h3>
						<ul>{factsList}</ul>
					</div>
					<div className="content_middle_map">
						<h3>Region d'influence</h3>
						<img
							src={kingdomInfos.map}
							alt="maps"
						/>
					</div>
				</div>
			</div>
			<Carousel button={'click'} />
		</div>
	);
}

export default Kingdom;
