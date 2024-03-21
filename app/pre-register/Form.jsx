"use client";

import { server } from "@/config/server";
import axios from "axios";
import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [expectations, setExpectations] = useState("");
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
				`${server}/api/register`,
				{ name, email, phoneNumber, expectations, address },
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
		<form onSubmit={submitHandler}>
			<h4>Registration</h4>
			<p>
				<span>Please register for Innovation 3.0</span>
				<span>Fill the form below</span>
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
				<label htmlFor="address">Address</label>
				<input
					id="address"
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="expectations">Expectations</label>
				<input
					id="expectations"
					type="text"
					value={expectations}
					onChange={(e) => setExpectations(e.target.value)}
				/>
			</div>
			<h5>{error && error}</h5>
			<div>
				<button disabled={success} className="btn btn-white-outline">
					{loading ? (
						<div className="loader"></div>
					) : success ? (
						`${success}`
					) : (
						"Register"
					)}
				</button>
			</div>
		</form>
	);
};

export default Form;
