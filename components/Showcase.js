import { Joti_One } from "next/font/google";
import React from "react";

const jotiOne = Joti_One({
	subsets: ["latin"],
	weight: ["400"],
});

const Showcase = () => {
	return (
		<div className="showcase">
			<div className="container">
				<div className={`intro-head`}>
					<div>
						<h4>Dream | Dare | Innovate</h4>
						<h1 className={`${jotiOne.className} inn`}>
							Inn <span>3.0</span> -Vation
						</h1>
						<p className="intro">
							Be part of the multitude delving into innovative
							concepts, building essential alliances, and learning
							from international & Global expert. Don't let this
							opportunity pass you by! Secure your spot now.
						</p>
					</div>
				</div>
				<div className="countdown-section">28;17;202</div>
			</div>
		</div>
	);
};

export default Showcase;
