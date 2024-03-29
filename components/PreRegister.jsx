import Link from "next/link";

const PreRegister = () => {
	return (
		<div className="pre-register-section">
			<div className="container">
				<div className="head">
					<span>Unlock the Future</span>
					<h4>Pre-register for Innovation 3.0</h4>
				</div>
				<p>
					Dare to dream, innovate, and embark on a journey of
					boundless possibilities with Innovation 3.0! Pre-register
					now to secure your spot and unlock access to a lineup of
					thought leaders who dare to challenge the norm, dream beyond
					limits, and innovate with relentless passion. From
					groundbreaking entrepreneurs to pioneering researchers, our
					speakers will ignite your imagination, inspire action, and
					equip you with the tools to drive meaningful change in your
					life and beyond. Join us at Innovation 3.0 and dare to
					dream, dare to innovate, and dare to shape the future!
				</p>
				<Link href="/pre-register" className="btn btn-primary">
					Pre-register for Innovation 3.0
				</Link>
			</div>
		</div>
	);
};

export default PreRegister;
