import FAQs from "./FAQs";
import Link from "next/link";

export const metadata = {
	title: "FAQs | Innovation 3.0",
	description:
		"Frequently asked questions, FAQs, Still have questions? Can't find the answers you are looking for. Please reach out to our friendly team. Innovation 3.0 - Our Mission - Our Vision - Our Team",
	keywords:
		"FAQ, Frequently asked question, FAQs Innovation, Innovation 3.0, Innovation 3.0, Innovation, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
};

const page = () => {
	return (
		<div className="faqpage">
			<div className="container">
				<div className="head break">
					<span>FAQ</span>
					<h4>
						<strong>Need help?</strong>
						<strong>
							Quick answers to some of your questions.
						</strong>
					</h4>
				</div>
				<FAQs />
				<div className="still-have-questions">
					<div>
						<h5>Still have questions?</h5>
						<small>
							Can't find the answers you are looking for. Please
							reach out to our friendly team.
						</small>
					</div>
					<Link href="/contact" className="btn btn-white-outline">
						Get in touch
					</Link>
				</div>
			</div>
		</div>
	);
};

export default page;
