"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const InnovationTwo = () => {
	const images = [
		"/1.jpg",
		"/2.jpg",
		"/3.jpg",
		"/4.jpg",
		"/5.jpg",
		"/6.jpg",
		"/7.jpg",
		"/8.jpg",
		"/9.jpg",
		"/10.jpg",
		"/11.jpg",
		"/12.jpg",
		"/13.jpg",
		"/14.jpg",
		"/15.jpg",
		"/16.jpg",
		"/17.jpg",
		"/18.jpg",
		"/19.jpg",
		"/20.jpg",
	];

	return (
		<div className="innovation-two">
			<span>Innovation 2.0</span>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				navigation={true}
				autoplay
				loop={true}
				grabCursor={true}
				modules={[Navigation, Autoplay]}
				scrollbar={{ draggable: true }}
				className="mySwiper"
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					780: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<Image
							src={image}
							alt={image}
							width={1000}
							height={1000}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default InnovationTwo;
