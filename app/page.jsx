import Excerpt from "@/components/Excerpt";
import Panelists from "@/components/Panelists";

import PreRegister from "@/components/PreRegister";
import Showcase from "@/components/Showcase";
import Speakers from "@/components/Speakers";
import Testimonials from "@/components/Testimonials";
import WhyInnovation from "@/components/WhyInnovation";

export default function Home() {
	return (
		<div className="homepage">
			<Showcase />
			<WhyInnovation />
			<Speakers />
			<Panelists />
			<Excerpt />
			<PreRegister />
			<Testimonials />
		</div>
	);
}
