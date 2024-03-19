import Footer from "@/components/Footer";
import InnovationTwo from "./InnovationTwo";
import OurSpeaker from "./OurSpeakers";
import OurTeam from "./OurTeam";

const page = () => {
	return (
		<>
			<div className="gallerypage">
				<div className="container">
					<div className="head">
						<span>Gallery</span>
						<h4>
							Dare to dream, innovate and explore our gallery.
						</h4>
					</div>
					<OurTeam />
					<OurSpeaker />
					<InnovationTwo />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default page;
