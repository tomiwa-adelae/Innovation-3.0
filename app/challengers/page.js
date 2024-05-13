import Challengers from "./Challengers";

export const metadata = {
	title: "Challengers | Innovation 3.0",
	description:
		"Challengers of Innovation 3.0 - Innovation 3.0 - Dare to dream, innovate and explore our gallery. Step into the Innovation Conference Gallery, where each image tells a story of inspiration and progress. From visionary speakers to dynamic workshops, explore snapshots capturing the essence of innovation in action.",
	keywords:
		"CSIF, Challengers, Challenge, Attendees, Gallery, photos, photo, picture, Cornerstone, Cornerstone International Foundation, International Foundations, Foundations, John, Ogunjide, Contact Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
};

const page = () => {
	return (
		<div className="challengerspage">
			<div className="container">
				<div className="head break">
					<span>Challenge</span>
					<h4>
						<strong>All registered challengers</strong>
					</h4>
				</div>
				<Challengers />
			</div>
		</div>
	);
};

export default page;
