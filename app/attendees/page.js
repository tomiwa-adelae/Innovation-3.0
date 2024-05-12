import Attendees from "./Attendees";

export const metadata = {
	title: "Attendees | Innovation 3.0",
	description:
		"Attendees of Innovation 3.0 - Innovation 3.0 - Dare to dream, innovate and explore our gallery. Step into the Innovation Conference Gallery, where each image tells a story of inspiration and progress. From visionary speakers to dynamic workshops, explore snapshots capturing the essence of innovation in action.",
	keywords:
		"CSIF, Attendees, Gallery, photos, photo, picture, Cornerstone, Cornerstone International Foundation, International Foundations, Foundations, John, Ogunjide, Contact Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
};

const page = () => {
	return (
		<div className="attendeespage">
			<div className="container">
				<div className="head break">
					<span>Attendees</span>
					<h4>
						<strong>All registered attendees</strong>
					</h4>
				</div>
				<Attendees />
			</div>
		</div>
	);
};

export default page;
