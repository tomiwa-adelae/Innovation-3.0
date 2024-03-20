"use client";

import { server } from "@/config/server";
import axios from "axios";
import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);

	const submitHandler = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		try {
			const res = await axios.post(
				`${server}/api/contact`,
				{ name, email, phoneNumber, message },
				config
			);

			// router.push("/success");
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
		<form onSubmit={submitHandler}>
			<h4>Get in touch</h4>
			<p>
				<span>You have some questions?</span>
				<span>Free feel to ask them anytime</span>
			</p>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="phoneNumber">Phone number</label>
				<input
					onWheel={(e) => e.target.blur()}
					type="number"
					id="phoneNumber"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="3"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</div>

			<h5>{error && error}</h5>

			<div>
				<button disabled={success} className="btn btn-white-outline">
					{loading ? (
						<div className="loader"></div>
					) : success ? (
						`${success}`
					) : (
						"Send message"
					)}
				</button>
			</div>
		</form>
	);
};

export default Form;
