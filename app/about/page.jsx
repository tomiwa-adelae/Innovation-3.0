import Image from "next/image";
import Link from "next/link";
import Team from "./Team";

export const metadata = {
	title: "About | Innovation 3.0",
	description:
		"About Innovation 3.0 - Our Mission - Our Vision - Our Team - Introducing Cornerstone foundations, the driving force behind Innovation 3.0 – a global platform dedicated to fostering creativity, collaboration, and progress. As an esteemed NGO committed to catalyzing positive change, we believe in the power of innovation to shape a better world for all.",
	keywords:
		"About Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
};

const page = () => {
	const teams = [
		{
			name: "John Ogunjide",
			position: "Convener of Innovation 3.0",
			imagePath: "/john-ogunjide-2.jpg",
		},
		{
			name: "Faluyi Peter",
			position: "Male host",
			imagePath: "/faluyi-peter.jpg",
		},
		{
			name: "Jegede Surprise",
			position: "",
			imagePath: "/jegede-surprise.jpg",
		},
		{
			name: "Ayelabowo wunmi",
			position: "",
			imagePath: "/ayelabowo-wunmi.jpg",
		},
		{
			name: "Anokwute Chidubem",
			position: "Volunteers lead",
			imagePath: "/victor.jpg",
		},
		{
			name: "Ikhide Evelyn",
			position: "Treasurer",
			imagePath: "/ikhide-evelyn.jpg",
		},
		{
			name: "Akagbosu Adesuwa",
			position: "Sponsor",
			imagePath: "/akagbosu-adesuwa.jpg",
		},
		{
			name: "Folaji Ayomide",
			position: "Ushering lead",
			imagePath: "/folaji-ayomide.jpg",
		},
		{
			name: "Oni Busayo",
			position: "Content Creator lead",
			imagePath: "/user-icon.jpg",
		},
		{
			name: "Susun Alabi",
			position: "Protocol lead",
			imagePath: "/susan-alabi.jpg",
		},
		{
			name: "Adeleke Ifeoluwani Dada",
			position: "Graphics Designer",
			imagePath: "/adeleke-ifeoluwani.jpg",
		},
		{
			name: "Tomiwa Adelae",
			position: "Website Developer",
			imagePath: "/tomiwa-adelae.jpg",
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
						src={"/22.jpg"}
						alt="John Ogunjide"
						height={1000}
						width={1000}
					/>
					<div className="mission-statement">
						<h4>Our Mission</h4>
						<p>
							At the heart of our mission is the commitment to
							reproducing leaders who are not only equipped with
							knowledge and skills but are also grounded in
							ethics, values, and morals. Through a carefully
							crafted educational approach, we instill in young
							minds the principles of integrity, empathy, and
							responsibility, essential for effective leadership
							in today's complex world. In parallel, we recognize
							the profound potential within young people to drive
							positive change. That's why we organize annual
							conferences tailored to those eager to explore their
							potential, make a difference, and grow personally
							and professionally. These gatherings serve as
							dynamic platforms where youth can connect,
							collaborate, and be inspired by each other's stories
							and aspirations. Moreover, our conferences transcend
							individual growth; they serve as catalysts for
							collective action and dialogue on pressing global
							issues. By bringing together students, political
							leaders, and sports champions, we foster diverse
							perspectives and constructive discourse aimed at
							finding innovative solutions to shared challenges.
							Through debates, discussions, and collaborative
							initiatives, participants emerge not only with a
							deeper understanding of global issues but also with
							a sense of empowerment to effect meaningful change
							in their communities and beyond.
						</p>
					</div>
				</div>
				<div className="line"></div>
				<div className="our-vision">
					<div className="vision-statement">
						<h4>Our Vision</h4>
						<p className="intro">
							The vision emerging from this approach is to
							cultivate a global community of ethical, empowered
							leaders who are deeply committed to positive change
							and collective progress. It envisions a world where
							young people are empowered to discover their
							potential, drive personal growth, and become
							catalysts for transformation in their communities
							and beyond. This vision embraces the idea of
							building ethical leadership, instilling in
							individuals a strong foundation of values, morals,
							and integrity. These leaders prioritize empathy,
							responsibility, and inclusivity in their
							decision-making, fostering trust and collaboration
							within diverse communities. Central to this vision
							is the facilitation of dialogue and collaboration
							among different stakeholders, including students,
							political leaders, and sports champions. Through
							constructive engagement, these individuals come
							together to address pressing global issues,
							leveraging their collective insights and expertise
							to co-create sustainable solutions. Ultimately, the
							vision aims to drive impactful change by empowering
							individuals to translate their ideas and passions
							into tangible actions that contribute to positive
							social, environmental, and economic outcomes. It
							fosters a culture of innovation and resilience,
							encouraging creativity and adaptability in
							navigating the complexities of our interconnected
							world while embracing diversity and inclusivity as
							fundamental principles.
						</p>
					</div>
					<Image
						src={"/21.jpg"}
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
								CSIF is a non-profit organization with the sole
								aim of educating young minds all over the world
								on issues ranging from leadership to current
								issues facing the world through holistic
								approach and international career. The aim of
								CSIF is to let young people discover themselves
								through the right education, understanding the
								meaning of leadership, ethics, values and having
								a say in world issues ranging from climate
								change, inventions, writing, craft, finance,
								politics through analytical problem solving
								skills. Additionally, training them on in-demand
								skills recognized globally.
							</p>
							<p>
								CSIF will bring students / young people all over
								the world yearly for an international forum. The
								conference is designed for young people who need
								to discover themselves. It will be an
								opportunity for them to grow, improve on
								themselves and relate with those who think
								differently. This conference brings together
								students, political leaders, sport champions,
								leaders to discuss world issues.
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
