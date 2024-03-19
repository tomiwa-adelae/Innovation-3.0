import Footer from "@/components/Footer";
import FAQs from "./FAQs";

const page = () => {
	return (
		<>
			<div className="faqpage">
				<div className="container">
					<div className="head">
						<span>FAQ</span>
						<h4>
							<strong>Need help?</strong>
							<strong>
								Quick answers to some of your questions.
							</strong>
						</h4>
					</div>
					<FAQs />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default page;
