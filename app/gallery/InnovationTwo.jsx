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
		"/john-ogunjide.jpg",
		"/john-ogunjide.jpg",
		"/john-ogunjide.jpg",
		"/john-ogunjide.jpg",
		"/john-ogunjide.jpg",
		"/john-ogunjide.jpg",
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
