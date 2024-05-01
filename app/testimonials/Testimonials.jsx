import Image from "next/image";

import { testimonials } from "../data/testimonials";

const Testimonials = () => {
	// const testimonials = [];

	return (
		<div className="testimonials">
			{testimonials.map((testimony, index) => (
				<div key={index} className="card">
					<div className="card__header">
						<Image
							src={testimony.imagePath}
							className="card__img"
							alt={testimony.name}
							width={1000}
							height={1000}
						/>
						<div>
							<h5>{testimony.name}</h5>
							<p>{testimony.portfolio}</p>
						</div>
					</div>

					<p className="card__quote">"{testimony.testimony}"</p>
				</div>
			))}
		</div>
	);
};

export default Testimonials;
