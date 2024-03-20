import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link href="/">
						<Image
							src={"/logo.jpg"}
							alt="INNOVATION 3.0 DARE | DREAM | INNOVATE"
							height={1000}
							width={1000}
						/>
					</Link>
				</div>
				<nav className="links">
					<Link href={"./about"}>About us</Link>
					<Link href={"./contact"}>Contact us</Link>
					<Link href={"./gallery"}>Our gallery</Link>
					<Link href={"./testimonials"}>Testimonials</Link>
					<Link href={"./faq"}>FAQs</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
