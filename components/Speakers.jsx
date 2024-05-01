import Image from "next/image";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoTwitter,
} from "react-icons/io5";

const Speakers = () => {
	const speakers = [
		{
			imagePath: "/seye-olurotimi.jpg",
			name: "Seye Olurotimi",
			title: "Founder, MSME Africa",
			facebook: "https://facebook.com/seyeolurotimi/",
			twitter: "https://twitter.com/seyeolurotimi/",
			instagram: "https://www.instagram.com/seyeolurotimi/",
		},
		{
			imagePath: "/ibironke-yekinni.jpg",
			name: "Ibironke Yekinni",
			title: "Software / Quality Assurance Engineer",
			facebook: "#",
			twitter: "#",
			instagram: "#",
		},
		{
			imagePath: "/ashibogwu-victor.jpg",
			name: "Ashibogwu Victor",
			title: "CEO, Iphonepreneur",
			facebook: "#",
			twitter: "#",
			instagram: "#",
		},
		{
			imagePath: "/tejiri-gloria.jpg",
			name: "Otomudo Tejiri",
			title: "Social Media Management Expert",
			facebook: "#",
			twitter: "#",
			instagram: "#",
		},
	];

	return (
		<div className="speakers-section">
			<div className="container">
				<div className="head">
					<h4>Innovation 3.0 Speakers</h4>
				</div>
				<div className="speakers">
					{speakers.map((speaker, index) => (
						<div key={index} className="speaker">
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
									href={speaker.facebook}
								>
									<IoLogoFacebook className="facebook" />
								</a>
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

export default Speakers;
