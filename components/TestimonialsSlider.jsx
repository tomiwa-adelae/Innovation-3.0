"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TestimonialSlider = () => {
	const testimonials = [
		{
			imagePath: "/speaker-one.jpg",
			name: "Joshua Icon",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
		},
		{
			imagePath: "/speaker-one.jpg",
			name: "Joshua Icon",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
		},
		{
			imagePath: "/speaker-two.jpg",
			name: "Donald Trump",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
		},
		{
			imagePath: "/speaker-three.jpg",
			name: "Barack Obama",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
		},
	];

	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			{testimonials.map((testimony, index) => (
				<SwiperSlide key={index}>{testimony.name}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TestimonialSlider;
