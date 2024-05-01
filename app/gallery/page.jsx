import InnovationTwo from "./InnovationTwo";
import OurSpeaker from "./OurSpeakers";
import OurTeam from "./OurTeam";

export const metadata = {
	title: "Gallery | Innovation 3.0",
	description:
		"Gallery Innovation 3.0 - Innovation 3.0 - Dare to dream, innovate and explore our gallery. Step into the Innovation Conference Gallery, where each image tells a story of inspiration and progress. From visionary speakers to dynamic workshops, explore snapshots capturing the essence of innovation in action.",
	keywords:
		"CSIF, Gallery, photos, photo, picture, Cornerstone, Cornerstone International Foundation, International Foundations, Foundations, John, Ogunjide, Contact Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
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
