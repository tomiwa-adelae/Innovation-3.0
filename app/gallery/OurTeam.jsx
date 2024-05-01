"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const OurTeam = () => {
	const images = [
		"/john-ogunjide-2.jpg",
		"/8.jpg",
		"/14.jpg",
		"/7.jpg",
		"/18.jpg",
		"/19.jpg",
		"/20.jpg",
		"/folaji-ayomide.jpg",
		"/ikhide-evelyn.jpg",
		"/akagbosu-adesuwa.jpg",
		"/adeleke-ifeoluwani.jpg",
		"/susan-alabi.jpg",
		"/tomiwa-adelae.jpg",
		"/victor.jpg",
	];

	return (
		<div className="our-team">
			<span>Our team & Volunteers</span>
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

export default OurTeam;
