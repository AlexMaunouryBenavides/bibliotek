import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper';
import datas from '../assets/data.json';
import { Link } from 'react-router-dom';

const Slider = ({ slides, button }) => {
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={-10}
				freeMode={true}
				modules={[FreeMode]}
				className="mySwiper">
				{datas.map((data) => (
					<SwiperSlide key={data.id}>
						<div className="slider-content">
							<h3>{data.title}</h3>
							<Link to={`kingdom/${data.id}  `}>
								<p>{button}</p>
							</Link>
						</div>

						<img
							src={data.profil}
							alt="empire"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Slider;
