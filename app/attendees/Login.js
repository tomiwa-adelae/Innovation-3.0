"use client";

import { server } from "@/config/server";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = ({ openFormHandler }) => {
	// const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
				`${server}/api/auth/login`,
				{
					// name,
					email,
					password,
				},
				config
			);

			setLoading(false);
			setSuccess(res.data.success);
			setError(null);
			openFormHandler();
		} catch (error) {
			setLoading(false);
			setSuccess(false);
			setError(error.response.data.message);
		}
	};

	return (
		<form className="login-form" onSubmit={submitHandler}>
			<h4>Login first</h4>

			{/* <div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div> */}

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
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<h5>{error && error}</h5>
			<div>
				<button disabled={success} className="btn btn-primary-outline">
					{loading ? (
						<div className="loader"></div>
					) : success ? (
						`${success}`
					) : (
						"Login"
					)}
				</button>
			</div>
		</form>
	);
};

export default Login;
