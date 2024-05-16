"use client";
import { server } from "@/config/server";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Challenger from "./Challenger";
import Login from "./Login";
import RegisterModal from "./RegisterModal";

const Challengers = () => {
	const [challengers, setChallengers] = useState([]);
	const [search, setSearch] = useState("");

	const [loading, setLoading] = useState(null);
	const [loadingChallengers, setLoadingChallengers] = useState(null);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	const [openForm, setOpenForm] = useState(false);

	useEffect(() => {
		async function fetchChallengers() {
			setLoadingChallengers(true);
			const res = await axios.get(`${server}/api/challenge`);
			setChallengers(res.data);
			setLoadingChallengers(false);
		}
		fetchChallengers();
	}, []);

	useEffect(() => {
		async function fetchChallengers() {
			setLoadingChallengers(true);
			const res = await axios.get(`${server}/api/challenge`);
			setChallengers(res.data);
			setLoadingChallengers(false);
		}
		if (!search) {
			fetchChallengers();
		}
	}, [search, openModal]);

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
			const res = await axios.get(
				`${server}/api/challenge?keyword=${search}`,
				config
			);

			setLoading(false);
			setError(null);
			setChallengers(res.data);
		} catch (error) {
			setLoading(false);
			setSuccess(false);
			setError(error.response.data.message);
		}
	};

	return (
		<div className="challengers-wrapper">
			{/* {
			!openForm ? (
				<Login openFormHandler={() => setOpenForm(true)} />
			) : (
				<> */}
			<form className="search-form" onSubmit={submitHandler}>
				<div className="search-input">
					<label htmlFor="search">Search</label>
					<input
						id="search"
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				<h5>{error && error}</h5>

				<button disabled={success} className="btn btn-primary-outline">
					{loading ? (
						<div className="loader"></div>
					) : success ? (
						`${success}`
					) : (
						"Search"
					)}
				</button>
			</form>

			<h5 style={{ margin: "1rem 0rem" }}>
				Total number of registered challengers: {challengers.length}
			</h5>

			<div className="register-challengers">
				<h5>Are there new challengers? Register them here</h5>
				<button
					onClick={() => setOpenModal(!openModal)}
					className="btn btn-primary"
				>
					Register
				</button>
			</div>
			{openModal && (
				<RegisterModal closeModal={() => setOpenModal(!openModal)} />
			)}

			{loadingChallengers ? (
				<div className="loader-wrapper">
					<div className="loader-xl"></div>
				</div>
			) : (
				<div className="challengers">
					{challengers.map((challenger) => (
						<Challenger
							key={challenger._id}
							challenger={challenger}
						/>
					))}
				</div>
			)}
			{/* </>
			)} */}
		</div>
	);
};

export default Challengers;
