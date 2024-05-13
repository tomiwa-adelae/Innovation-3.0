"use client";

import { server } from "@/config/server";
import axios from "axios";
import { useEffect, useState } from "react";

const RegisterModal = ({ closeModal }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [category, setCategory] = useState("");
	const [presentationType, setPresentationType] = useState("");
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Hit backend to jumpstart the server and reduce time of spin-down
		async function hitDB() {
			await axios.get(`${server}/`);
		}

		hitDB();
	}, []);

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
				`${server}/api/challenge/create`,
				{
					name,
					email,
					phoneNumber,
					category,
					presentationType,
					address,
					markChallenged: true,
				},
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
		<div className="register-modal">
			<form onSubmit={submitHandler}>
				<h4>Registration</h4>
				<p>
					<span>Join the Innovation Challenge</span>
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
					<label htmlFor="category">Challenge category</label>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						name="challenge"
						id="challenge"
					>
						<option value="">Select challenge category</option>
						<option value="Entrepreneurship">
							Entrepreneurship
						</option>
						<option value="Technology">Technology</option>
						<option value="Social Media">Social media</option>
					</select>
				</div>
				<div>
					<label htmlFor="presentationType">PresentationType</label>
					<select
						value={presentationType}
						onChange={(e) => setPresentationType(e.target.value)}
						name="presentationType"
						id="presentationType"
					>
						<option value="">Select presentation type</option>
						<option value="Oral presentation">
							Oral presentation
						</option>
						<option value="Practical presentation">
							Practical presentation
						</option>
					</select>
				</div>
				<h5>{error && error}</h5>
				<div>
					<button
						onClick={() => closeModal()}
						type="button"
						className="btn btn-grey-outline"
					>
						Go back
					</button>
					<button
						disabled={success}
						className="btn btn-primary-outline"
					>
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
		</div>
	);
};

export default RegisterModal;
