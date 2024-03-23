import Form from "./Form";

export const metadata = {
	title: "Register | Innovation 3.0",
	description:
		"An NGO whose aim is to educate young minds globally on issues ranging from leadership to current issues facing the world through holistic approach",
};

const page = () => {
	return (
		<div className="pre-registerpage">
			<div className="container">
				<h2>Dare | Dream | Innovate</h2>
				<Form />
			</div>
		</div>
	);
};

export default page;
