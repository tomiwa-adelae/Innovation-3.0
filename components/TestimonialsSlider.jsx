"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
	const testimonials = [
		{
			imagePath: "/speaker-one.jpg",
			name: "Joshua Icon",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
			portfolio: "Founder of Google",
		},
		{
			imagePath: "/speaker-one.jpg",
			name: "Joshua Icon",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
			portfolio: "Founder of Google",
		},
		{
			imagePath: "/speaker-two.jpg",
			name: "Donald Trump",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
			portfolio: "Founder of Google",
		},
		{
			imagePath: "/speaker-three.jpg",
			name: "Barack Obama",
			testimony:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem doloribus harum sint laboriosam repudiandae perferendis veniam eius saepe quo! Laboriosam, dignissimos eligendi accusamus aliquam optio officiis iure nemo sapiente eveniet molestiae rem saepe unde quaerat dolorem, vero voluptates sit soluta dolores error culpa aut? Delectus laboriosam laudantium iste eos!",
			portfolio: "Founder of Google",
		},
	];

	return (
		<Swiper
			navigation={true}
			autoplay
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
