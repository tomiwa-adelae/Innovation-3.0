import TestimonialSlider from "./TestimonialsSlider";

const Testimonials = () => {
	return (
		<div className="testimonials-section">
			<div className="container">
				<div className="head break">
					<span>Testimonials</span>
					<h4>
						<strong>Don't take our words for it.</strong>
						<strong>See what others are saying.</strong>
					</h4>
				</div>
				<TestimonialSlider className="testimonial-sliders" />
			</div>
		</div>
	);
};

export default Testimonials;
