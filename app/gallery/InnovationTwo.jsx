"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

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
				navigation={true}
				autoplay
				modules={[Navigation, Autoplay]}
				scrollbar={{ draggable: true }}
				className="mySwiper"
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
