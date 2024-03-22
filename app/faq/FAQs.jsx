import Question from "./Question";

const FAQs = () => {
	const questions = [
		{
			title: "What is Innovation 3.0?",
			answer: "Innovation is the best thing that happened to mankind.",
		},
		{
			title: "Is Innovation 3.0 free?",
			answer: "Innovation is the best thing that happened to mankind.",
		},
		{
			title: "What do I need to bring along for Innovation 3.0?",
			answer: "Innovation is the best thing that happened to mankind.",
		},
		{
			title: "Can I prepare some questions to ask the speakers?",
			answer: "Innovation is the best thing that happened to mankind.",
		},
		{
			title: "What do you have in store for use?",
			answer: "Innovation is the best thing that happened to mankind.",
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
