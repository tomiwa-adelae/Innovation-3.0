"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const Question = ({ question }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div className={showAnswer ? "question dark" : "question"}>
			<div onClick={() => setShowAnswer(!showAnswer)} className="title">
				<h5>{question.title}</h5>
				{showAnswer ? <LuMinus /> : <GoPlus className="facebook" />}
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
