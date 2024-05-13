"use client";

import { server } from "@/config/server";
import axios from "axios";
import { useState } from "react";

const Challenger = ({ challenger }) => {
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [loading, setLoading] = useState(null);

	const markAsAttended = async (e) => {
		e.preventDefault();

		setError(null);
		setLoading(true);

		const id = challenger._id;

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		try {
			const res = await axios.post(
				`${server}/api/challenge/mark-challenged`,
				{ id },
				config
			);

			setLoading(false);
			setSuccess(res.data.success);
			setError(null);
		} catch (error) {
			setLoading(false);
			setSuccess(false);
			setError(error.response.data.message);
		}
	};

	return (
		<div
			className={
				challenger.markChallenged || success
					? "challenger marked"
					: "challenger"
			}
		>
			<h6>Name: {challenger.name}</h6>
			<div className="line"></div>
			<h6>Email: {challenger.email || <i>No email address</i>}</h6>
			<div className="line"></div>
			<h6>Challenge category: {challenger.category}</h6>
			<div className="line"></div>
			<h6>Presentation type: {challenger.presentationType}</h6>
			<button
				disabled={success || challenger.markChallenged}
				onClick={markAsAttended}
				className="btn btn-primary-outline btn-small"
			>
				{loading ? (
					<div className="loader"></div>
				) : success ? (
					`${success}`
				) : challenger.markChallenged ? (
					"Challenged!"
				) : (
					"Mark as challenge"
				)}
			</button>
			<h5>{error && error}</h5>
		</div>
	);
};

export default Challenger;
