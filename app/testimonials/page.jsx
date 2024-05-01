import Testimonials from "./Testimonials";

export const metadata = {
	title: "Testimonials | Innovation 3.0",
	description:
		"Testimonials Innovation 3.0 - Innovation 3.0 - Don't take our words for it. See what others are saying.",
	keywords:
		"Testimonies, Testimonials, Testimony, Reports, Reviews, Gallery, photos, photo, picture, Cornerstone, Cornerstone International Foundation, International Foundations, Foundations, John, Ogunjide, Contact Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
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
