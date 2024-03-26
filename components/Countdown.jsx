"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Countdown = () => {
	const launchDate = new Date("May 10, 2024, 09:00:00").getTime();

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		var updateTime = setInterval(() => {
			const now = new Date().getTime();

			const difference = launchDate - now;

			var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
			var newHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var newMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60)
			);
			var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(newDays);
			setHours(newHours);
			setMinutes(newMinutes);
			setSeconds(newSeconds);

			if (newDays < 10) {
				setDays("0" + newDays);
			}

			if (newHours < 10) {
				setHours("0" + newHours);
			}

			if (newMinutes < 10) {
				setMinutes("0" + newMinutes);
			}

			if (newSeconds < 10) {
				setSeconds("0" + newSeconds);
			}

			if (difference <= 0) {
				clearInterval(updateTime);
				setMessage("It's world Innovation 3.0 day!!!");
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		});

		return () => {
			clearInterval(updateTime);
		};
	}, [launchDate]);

	return (
		<div className="countdown-section">
			<div className="countdown">
				<div className="box">
					<div>
						<h5>{days}</h5>
						<small>Days</small>
					</div>
					<div>
						<h4>:</h4>
					</div>
				</div>
				<div className="box">
					<div>
						<h5>{hours}</h5>
						<small>Hours</small>
					</div>
					<div>
						<h4>:</h4>
					</div>
				</div>
				<div className="box">
					<div>
						<h5>{minutes}</h5>
						<small>Minutes</small>
					</div>
					<div>
						<h4>:</h4>
					</div>
				</div>
				<div className="box">
					<div>
						<h5>{seconds}</h5>
						<small>Seconds</small>
					</div>
					<div></div>
				</div>
			</div>
			<Link href="/pre-register" className="btn btn-primary">
				{message ? message : "Pre-register for Innovation 3.0"}
			</Link>
		</div>
	);
};

export default Countdown;
