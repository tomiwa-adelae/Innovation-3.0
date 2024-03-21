"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (openNav && event.key === "Escape") {
				event.preventDefault();

				// 👇️ your logic here
				setOpenNav(!openNav);
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, [openNav]);

	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link onClick={() => setOpenNav(false)} href="/">
						<Image
							src={"/logo.jpg"}
							alt="INNOVATION 3.0 DARE | DREAM | INNOVATE"
							height={1000}
							width={1000}
						/>
						{/* <Image
							src={"/cornerstone-logo.jpg"}
							alt="Cornerstone Foundations"
							height={1000}
							width={1000}
						/> */}
					</Link>
				</div>
				<nav className={openNav ? "links open" : "links"}>
					<Link onClick={() => setOpenNav(!openNav)} href={"./about"}>
						About us
					</Link>
					<Link
						onClick={() => setOpenNav(!openNav)}
						href={"./contact"}
					>
						Contact us
					</Link>
					<Link
						onClick={() => setOpenNav(!openNav)}
						href={"./gallery"}
					>
						Our gallery
					</Link>
					<Link
						onClick={() => setOpenNav(!openNav)}
						href={"./testimonials"}
					>
						Testimonials
					</Link>
					<Link onClick={() => setOpenNav(!openNav)} href={"./faq"}>
						FAQs
					</Link>
				</nav>
				<div onClick={() => setOpenNav(!openNav)} className="burger">
					{openNav ? (
						<AiOutlineClose className="burger-icon" />
					) : (
						<CiMenuFries className="burger-icon" />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
