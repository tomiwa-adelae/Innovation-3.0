"use client";
import { server } from "@/config/server";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Attendee from "./Attendee";
import Login from "./Login";
import RegisterModal from "./RegisterModal";

const Attendees = () => {
	const [attendees, setAttendees] = useState([]);
	const [search, setSearch] = useState("");

	const [loading, setLoading] = useState(null);
	const [loadingAttendees, setLoadingAttendees] = useState(null);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);
	const [openModal, setOpenModal] = useState(false);

	const [openForm, setOpenForm] = useState(false);

	useEffect(() => {
		async function fetchAttendees() {
			setLoadingAttendees(true);
			const res = await axios.get(`${server}/api/register`);
			setAttendees(res.data);
			setLoadingAttendees(false);
		}
		fetchAttendees();
	}, []);

	useEffect(() => {
		async function fetchAttendees() {
			setLoadingAttendees(true);
			const res = await axios.get(`${server}/api/register`);
			setAttendees(res.data);
			setLoadingAttendees(false);
		}
		if (!search) {
			fetchAttendees();
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
				`${server}/api/register?keyword=${search}`,
				config
			);

			setLoading(false);
			setError(null);
			setAttendees(res.data);
		} catch (error) {
			setLoading(false);
			setSuccess(false);
			setError(error.response.data.message);
		}
	};

	return (
		<div className="attendees-wrapper">
			{!openForm ? (
				<Login openFormHandler={() => setOpenForm(true)} />
			) : (
				<>
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

						<button
							disabled={success}
							className="btn btn-primary-outline"
						>
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
						Total number of registered attendees: {attendees.length}
					</h5>

					<div className="register-attendees">
						<h5>Are there new attendees? Register them here</h5>
						<button
							onClick={() => setOpenModal(!openModal)}
							className="btn btn-primary"
						>
							Register
						</button>
					</div>
					{openModal && (
						<RegisterModal
							closeModal={() => setOpenModal(!openModal)}
						/>
					)}

					{loadingAttendees ? (
						<div className="loader-wrapper">
							<div className="loader-xl"></div>
						</div>
					) : (
						<div className="attendees">
							{attendees.map((attendee) => (
								<Attendee
									key={attendee._id}
									attendee={attendee}
								/>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Attendees;
