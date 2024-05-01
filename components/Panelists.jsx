import Image from "next/image";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoTwitter,
} from "react-icons/io5";

const Panelists = () => {
	const panelists = [
		{
			imagePath: "/ibukunoluwa-taiwo.jpg",
			name: "Ibukunoluwa Taiwo",
			title: "Ajayi Crowther University Student Assembly President",
			facebook: "#",
			twitter: "https://twitter.com/ibukunoluwa0100",
			instagram: "https://www.instagram.com/ibukunoluwa0100/",
		},
		{
			imagePath: "/richard-solomon.jpg",
			name: "Amb. Richard Solomon",
			title: "ECOWAS Youth Ambassador",
			facebook: "#",
			twitter: "https://twitter.com/RichardSW001",
			instagram: "https://www.instagram.com/amb_richard.solomon/",
		},
		{
			imagePath: "/samuel-tobiloba.jpg",
			name: "Samuel Tobiloba",
			title: "UI SUG President",
			facebook: "#",
			twitter: "https://twitter.com/HOST_Dr",
			instagram: "#",
		},
	];

	return (
		<div className="panelist-section">
			<div className="container">
				<div className="head">
					<h4>Innovation 3.0 Panelists</h4>
				</div>
				<div className="panelists">
					{panelists.map((speaker, index) => (
						<div key={index} className="panelist">
							<Image
								src={speaker.imagePath}
								alt={speaker.name}
								width={1000}
								height={1000}
							/>
							<h4>{speaker.name}</h4>
							<p>{speaker.title}</p>
							<div className="socials">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={speaker.instagram}
								>
									<IoLogoInstagram className="instagram" />
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={speaker.facebook}
								>
									<IoLogoFacebook className="facebook" />
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={speaker.twitter}
								>
									<IoLogoTwitter className="twitter" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Panelists;
