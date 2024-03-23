import Testimonials from "./Testimonials";

export const metadata = {
	title: "Testimonials | Innovation 3.0",
	description:
		"An NGO whose aim is to educate young minds globally on issues ranging from leadership to current issues facing the world through holistic approach",
};

const page = () => {
	return (
		<div className="testimonialspage">
			<div className="container">
				<div className="head break">
					<span>Testimonials</span>
					<h4>
						<strong>Don't take our words for it.</strong>
						<strong>See what others are saying.</strong>
					</h4>
				</div>
				<Testimonials />
			</div>
		</div>
	);
};

export default page;
