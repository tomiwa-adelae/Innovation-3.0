"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { testimonials } from "../app/data/testimonials";

const TestimonialSlider = () => {
	return (
		<Swiper
			navigation={true}
			autoplay
			loop={true}
			effect="flip"
			grabCursor={true}
			modules={[Navigation, Autoplay]}
			scrollbar={{ draggable: true }}
			className="mySwiper"
		>
			{testimonials.map((testimony, index) => (
				<SwiperSlide key={index}>
					<Image
						src={testimony.imagePath}
						alt={testimony.name}
						width={1000}
						height={1000}
					/>
					<h4>{testimony.name}</h4>
					<p>{testimony.portfolio}</p>
					<p className="intro">{testimony.testimony}</p>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TestimonialSlider;
