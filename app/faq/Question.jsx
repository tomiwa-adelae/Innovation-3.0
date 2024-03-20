"use client";
import { useState } from "react";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";

const Question = ({ question }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div className={showAnswer ? "question dark" : "question"}>
			<div onClick={() => setShowAnswer(!showAnswer)} className="title">
				<h5>{question.title}</h5>
				{showAnswer ? (
					<IoLogoInstagram className="instagram" />
				) : (
					<IoLogoFacebook className="facebook" />
				)}
			</div>
			{showAnswer && (
				<div className="answer">
					<p>{question.answer}</p>
				</div>
			)}
		</div>
	);
};

export default Question;
