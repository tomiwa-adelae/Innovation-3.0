import Image from "next/image";
import Link from "next/link";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
	return (
		<footer>
			<Link href="/">
				<Image
					src={"/logo.jpg"}
					alt="Innovation 3.0"
					width={1000}
					height={1000}
				/>
			</Link>
			<p>&copy; 2024 Innovation 3.0. All Rights Reserved</p>
			<div className="socials">
				<IoLogoFacebook className="facebook" />
				<IoLogoInstagram className="instagram" />
				<IoLogoTwitter className="twitter" />
			</div>
		</footer>
	);
};

export default Footer;
