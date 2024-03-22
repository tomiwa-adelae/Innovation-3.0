import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Excerpt = () => {
	const excerpt = [
		{
			name: "Elizabeth Samuel",
			imagePath: "/elizabeth-samuel.jpg",
			excerpt:
				"You are not the light of Ajayi Crowther University. You are not the light of Oyo town. You are not the light of Oyo State. You are the light of the world. Shine bright anywhere you find yourself.",
			title: "Award winning Book Editor and Writer",
			quoteDirection: "left",
		},
		{
			name: "Emmanuel Agida",
			imagePath: "/emmanuel-agida.jpg",
			excerpt:
				"No matter your age, you have the capacity to be what God wants you to be. You can fulfill your potential no matter your age.",
			title: "ECOWAS Youth Ambassador",
			quoteDirection: "right",
		},
	];

	return (
		<div className="excerpt-section">
			<div className="container">
				<div className="head">
					<h4>Excerpt from Innovation 2.0</h4>
				</div>

				<div className="excerpts">
					{excerpt.map((excerpt, index) => (
						<div key={index} className="excerpt">
							<div className="details">
								{excerpt.quoteDirection === "right" ? (
									<FaQuoteRight />
								) : (
									<FaQuoteLeft />
								)}
								<h5>{excerpt.excerpt}</h5>
								<div>
									<span className="name">
										<h6>{excerpt.name}</h6>
									</span>
									<span className="title">
										<h6>{excerpt.title}</h6>
									</span>
								</div>
							</div>
							<Image
								src={excerpt.imagePath}
								alt={excerpt.name}
								width={1000}
								height={1000}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Excerpt;
