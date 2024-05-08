import Form from "./Form";

export const metadata = {
	title: "Challenge | Innovation 3.0",
	description:
		"An NGO whose aim is to educate young minds globally on issues ranging from leadership to current issues facing the world through holistic approach",
};

const page = () => {
	return (
		<div className="challengepage">
			<div className="container">
				<h2>Innovate | Challenge | Elevate</h2>
				<Form />
			</div>
		</div>
	);
};

export default page;
