import Footer from "@/components/Footer";
import Testimonials from "./Testimonials";

const page = () => {
	return (
		<>
			<div className="testimonialspage">
				<div className="container">
					<div className="head">
						<span>Testimonials</span>
						<h4>
							<strong>Don't take our words for it.</strong>
							<strong>See what others are saying.</strong>
						</h4>
					</div>
					<Testimonials />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default page;