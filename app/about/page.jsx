import Image from "next/image";
import Link from "next/link";
import Team from "./Team";

export const metadata = {
	title: "About | Innovation 3.0",
	description:
		"An NGO whose aim is to educate young minds globally on issues ranging from leadership to current issues facing the world through holistic approach",
};

const page = () => {
	const teams = [
		{
			name: "John Ogunjide",
			position: "Convener of Innovation 3.0",
			imagePath: "/john-ogunjide-2.jpg",
		},
		{
			name: "Tomiwa Adelae",
			position: "Convener of Innovation 3.0",
			imagePath: "/8.jpg",
		},
		{
			name: "Summi Dada",
			position: "Femal Host",
			imagePath: "/12.jpg",
		},
		{
			name: "Peter Faluyi",
			position: "Male Host",
			imagePath: "/12.jpg",
		},
		{
			name: "John Ogunjide",
			position: "Convener of Innovation 3.0",
			imagePath: "/john-ogunjide-3.jpg",
		},
		{
			name: "Tomiwa Adelae",
			position: "Convener of Innovation 3.0",
			imagePath: "/john-ogunjide.jpg",
		},
		{
			name: "Summi Dada",
			position: "Femal Host",
			imagePath: "/john-ogunjide.jpg",
		},
		{
			name: "Peter Faluyi",
			position: "Male Host",
			imagePath: "/john-ogunjide.jpg",
		},
		{
			name: "John Ogunjide",
			position: "Convener of Innovation 3.0",
			imagePath: "/john-ogunjide.jpg",
		},
	];

	return (
		<div className="aboutpage">
			<div className="container">
				<div className="head">
					<h1>About</h1>
				</div>
				<div className="about-innovation">
					<div>
						<p className="intro">
							Introducing Cornerstone foundations, the driving
							force behind Innovation 3.0 – a global platform
							dedicated to fostering creativity, collaboration,
							and progress. As an esteemed NGO committed to
							catalyzing positive change, we believe in the power
							of innovation to shape a better world for all. Led
							by our visionary convener John Ogunjide, we unite
							changemakers, thought leaders, and innovators from
							every corner of the globe to tackle the most
							pressing challenges of our time. With a mission to
							inspire, empower, and amplify impactful solutions,
							we strive to create a more inclusive and sustainable
							future for generations to come. Join us as we embark
							on this transformative journey at Innovation 3.0,
							where daring ideas converge, dreams take flight, and
							innovation paves the way forward. Together, let's
							dare to dream, dare to innovate, and dare to make a
							difference.
						</p>
						<br />
						<p>
							Under the guidance of our esteemed convener, John
							Ogunjide, Cornerstone foundations has emerged as a
							beacon of hope and progress in the global landscape
							of innovation and social change. With a rich history
							of spearheading initiatives that push the boundaries
							of what's possible, we are driven by a steadfast
							commitment to catalyze meaningful impact in
							communities worldwide.
						</p>
					</div>
					<Image
						src={"/john-ogunjide-2.jpg"}
						alt="John Ogunjide"
						height={1000}
						width={1000}
					/>
				</div>
				<div className="line"></div>
				<div className="our-mission">
					<Image
						src={"/2.jpg"}
						alt="John Ogunjide"
						height={1000}
						width={1000}
					/>
					<div className="mission-statement">
						<h4>Our Mission</h4>
						<p className="intro">
							Our mission is to empower individuals and
							communities to create positive change through
							innovative solutions and meaningful collaborations.
							We are dedicated to fostering a culture of
							creativity, inclusivity, and sustainability, where
							every voice is heard and every idea is valued.
							Through our relentless commitment to excellence and
							our unwavering belief in the power of collective
							action, we strive to address the most pressing
							challenges facing society today and pave the way for
							a brighter, more equitable future for all
						</p>
					</div>
				</div>
				<div className="line"></div>
				<div className="our-vision">
					<div className="vision-statement">
						<h4>Our Vision</h4>
						<p className="intro">
							Our vision is a world where innovation thrives as a
							driving force for positive transformation. We
							envision a future where creativity knows no bounds,
							where bold ideas are embraced, and where
							collaboration flourishes across borders and
							disciplines. We aspire to be catalysts for change,
							inspiring individuals and organizations to push
							beyond conventional limits and pioneer solutions
							that address complex global issues. By fostering a
							culture of curiosity, empathy, and resilience, we
							envision a world where innovation becomes synonymous
							with progress, driving sustainable growth, and
							creating lasting impact for generations to come.
						</p>
					</div>
					<Image
						src={"/13.jpg"}
						alt="John Ogunjide"
						height={1000}
						width={1000}
					/>
				</div>
				<div className="cornerstone-foundation">
					<div className="head">
						<h3>Cornerstone foundations</h3>
					</div>
					<div className="about-cornersone-foundation">
						<Image
							src={"/11.jpg"}
							alt="John Ogunjide"
							height={1000}
							width={1000}
						/>
						<div>
							<p className="intro">
								Introducing the driving force behind Innovation
								3.0: an NGO committed to nurturing the minds of
								tomorrow through a holistic approach to
								education. With a steadfast mission to empower
								young individuals worldwide, we strive to
								educate, inspire, and equip them with the
								knowledge and skills needed to navigate the
								complexities of our ever-changing world. From
								fostering leadership qualities to addressing
								pressing global issues, our organization is
								dedicated to cultivating a generation of
								critical thinkers, empathetic leaders, and
								proactive changemakers. Through innovative
								programs and initiatives, we aim to spark
								curiosity, ignite passion, and instill a sense
								of responsibility towards building a brighter
								future for all. Join us as we embark on this
								transformative journey of education,
								empowerment, and global impact at Innovation
								3.0.
							</p>
							<br />
							<Link
								href="/cornerstone-foundation"
								className="btn btn-primary"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
				<Team teams={teams} />
			</div>
		</div>
	);
};

export default page;
