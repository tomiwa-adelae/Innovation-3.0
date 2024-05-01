import Question from "./Question";

const FAQs = () => {
	const questions = [
		{
			title: "What is Innovation 3.0?",
			answer: "Innovation 3.0 serves as a gathering at Ajayi Crowther University, fostering the development of both leaders and young minds. It provides a vibrant setting where youth can engage, cooperate, and draw inspiration from one another's experiences and ambitions.",
		},
		{
			title: "Is Innovation 3.0 free?",
			answer: "Innovation 3.0 is completely free. Join us to benefit from the wealth of knowledge and experience shared by seasoned professionals at no cost.",
		},
		{
			title: "Where would Innovation 3.0 hold?",
			answer: "Innovation 3.0 will take place at the Alakija Law Faculty Auditorium, located within Ajayi Crowther University. The conference will commence promptly at 9:00am.",
		},
		// {
		// 	title: "What topics will be covered during Innovation 3.0?",
		// 	answer: "Innovation 3.0 is packed with speakers who will speak on:  is the best thing that happened to mankind.",
		// },
		{
			title: "Will there be opportunities for networking?",
			answer: "Networking is an integral part of Innovation 3.0, enhancing the conference experience. An allocated time will be provided for attendees to network with both speakers and fellow individuals. We encourage all participants to take advantage of this opportunity!",
		},
		{
			title: "Will there be meals or refreshments provided?",
			answer: "Refreshments will be provided for our guests at Innovation 3.0. Both breakfast and lunch will be served to ensure that attendees stay energized and engaged throughout the event.",
		},
	];

	return (
		<div className="faqs">
			{questions.map((question, index) => (
				<Question key={index} question={question} />
			))}
		</div>
	);
};

export default FAQs;
