import InnovationTwo from "./InnovationTwo";
import OurSpeaker from "./OurSpeakers";
import OurTeam from "./OurTeam";

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
