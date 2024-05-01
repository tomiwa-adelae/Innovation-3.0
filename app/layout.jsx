import { Montserrat } from "next/font/google";
import "../styles/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700", "800"],
});

export const metadata = {
	title: "Innovation 3.0",
	description:
		"CSIF is a non-profit organization with the sole aim of educating young minds all over the world on issues ranging from leadership to current issues facing the world through holistic approach and international career.",
	keywords:
		"Innovation, Innovation 3.0, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University, John Ogunjide",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
