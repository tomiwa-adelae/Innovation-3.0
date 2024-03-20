import Question from "./Question";

const FAQs = () => {
	const questions = [
		{
			title: "What is Innovation 3.0?",
			answer: "Innovation is the best thing that happened to mankind.",
		},
		{
			title: "Who is John Ogunjide?",
			answer: "Innovation is the best thing that happened to mankind.",
		},
		{
			title: "Who are the new speakers?",
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
