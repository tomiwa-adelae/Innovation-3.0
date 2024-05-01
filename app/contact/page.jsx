import Form from "./Form";

export const metadata = {
	title: "Contact | Innovation 3.0",
	description:
		"Contact Innovation 3.0 - Our Mission - Our Vision - Our Team - Introducing Cornerstone foundations, the driving force behind Innovation 3.0 – a global platform dedicated to fostering creativity, collaboration, and progress. As an esteemed NGO committed to catalyzing positive change, we believe in the power of innovation to shape a better world for all. Led by our visionary convener John Ogunjide, we unite changemakers, thought leaders, and innovators from every corner of the globe to tackle the most pressing challenges of our time.",
	keywords:
		"Contact Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
};

const page = () => {
	return (
		<div className="contactpage">
			<div className="container">
				<h2>Contact us</h2>
				<Form />
			</div>
		</div>
	);
};

export default page;
