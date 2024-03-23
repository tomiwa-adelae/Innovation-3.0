import InnovationTwo from "./InnovationTwo";
import OurSpeaker from "./OurSpeakers";
import OurTeam from "./OurTeam";

export const metadata = {
	title: "Gallery | Innovation 3.0",
	description:
		"An NGO whose aim is to educate young minds globally on issues ranging from leadership to current issues facing the world through holistic approach",
};

const page = () => {
	return (
		<div className="gallerypage">
			<div className="container">
				<div className="head break">
					<span>Gallery</span>
					<h4>
						<strong>Dare to dream, innovate and</strong>{" "}
						<strong>explore our gallery.</strong>
					</h4>
				</div>
				<OurTeam />
				<OurSpeaker />
				<InnovationTwo />
			</div>
		</div>
	);
};

export default page;
