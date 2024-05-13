"use client";

import { server } from "@/config/server";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Attendee = ({ attendee }) => {
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [loading, setLoading] = useState(null);

	const markAsAttended = async (e) => {
		e.preventDefault();

		setError(null);
		setLoading(true);

		const id = attendee._id;

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		try {
			const res = await axios.post(
				`${server}/api/register/mark-attended`,
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
				attendee.markAttendance || success
					? "attendee marked"
					: "attendee"
			}
		>
			<h6>Name: {attendee.name}</h6>
			<div className="line"></div>
			<h6>Email: {attendee.email || <i>No email address</i>}</h6>
			<button
				disabled={success || attendee.markAttendance}
				onClick={markAsAttended}
				className="btn btn-primary-outline btn-small"
			>
				{loading ? (
					<div className="loader"></div>
				) : success ? (
					`${success}`
				) : attendee.markAttendance ? (
					"Attendance marked!"
				) : (
					"Mark as attend"
				)}
			</button>
			<h5>{error && error}</h5>
		</div>
	);
};

export default Attendee;
