import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

const Speakers = () => {
	return (
		<div className="speakers-section">
			<div className="container">
				<div className="head">
					<h4>Innovation 3.0 Speakers</h4>
				</div>
				<div className="speakers">
					<div className="speaker">
						<Image
							src={"/speaker-one.jpg"}
							alt="Speaker One"
							width={1000}
							height={1000}
						/>
						<h4>John Doe</h4>
						<p>Deputy & CEO of Apple</p>
						<div className="socials">
							<IoLogoInstagram className="instagram" />
							<IoLogoFacebook className="facebook" />
							<IoLogoTwitter className="twitter" />
						</div>
					</div>
					<div className="speaker">
						<Image
							src={"/speaker-two.jpg"}
							alt="Speaker One"
							width={1000}
							height={1000}
						/>
						<h4>John Doe</h4>
						<p>Deputy & CEO of Apple</p>
						<div className="socials">
							<IoLogoInstagram className="instagram" />
							<IoLogoFacebook className="facebook" />
							<IoLogoTwitter className="twitter" />
						</div>
					</div>
					<div className="speaker">
						<Image
							src={"/speaker-three.jpg"}
							alt="Speaker Two"
							width={1000}
							height={1000}
						/>
						<h4>John Doe</h4>
						<p>Deputy & CEO of Apple</p>
						<div className="socials">
							<IoLogoInstagram className="instagram" />
							<IoLogoFacebook className="facebook" />
							<IoLogoTwitter className="twitter" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Speakers;
