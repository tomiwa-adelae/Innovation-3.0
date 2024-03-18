import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Excerpt = () => {
	return (
		<div className="excerpt-section">
			<div className="container">
				<div className="head">
					<h4>Excerpt from Innovation 2.0</h4>
				</div>
				<div className="excerpts">
					<div className="excerpt">
						<div className="details">
							<FaQuoteLeft />
							<h5>
								Skills without character will lead to depression
							</h5>
							<div className="name">
								<h5>Elizabeth Samuel</h5>
							</div>
							<div className="award">
								<h5>Award winning Book Editor and Writer</h5>
							</div>
						</div>
						<Image
							src={"/elizabeth-samuel.jpg"}
							alt="Elizabeth Samuel"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="excerpt">
						<div className="details">
							<FaQuoteRight />
							<h5>
								No matter your age, you have the capacity to be
								what God wants you to be. You can fulfill your
								potential no matter your age.
							</h5>
							<div className="name">
								<h5>Emmanuel Agida</h5>
							</div>
							<div className="award">
								<h5>ECOWAS Youth Ambassador</h5>
							</div>
						</div>
						<Image
							src={"/elizabeth-samuel.jpg"}
							alt="Elizabeth Samuel"
							width={1000}
							height={1000}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Excerpt;
