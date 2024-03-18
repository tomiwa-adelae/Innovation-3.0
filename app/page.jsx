import Showcase from "@/components/Showcase";
import WhyInnovation from "@/components/WhyInnovation";

export default function Home() {
	return (
		<div className="homepage">
			{/* Showcase or Hero */}
			<Showcase />
			{/* Why Innovation 3.0 */}
			<WhyInnovation />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Voluptatibus, quia qui? Consectetur incidunt maiores reiciendis
				temporibus explicabo aut quam laboriosam eius obcaecati quia
				nulla cupiditate, assumenda recusandae voluptates praesentium
				ipsam?
			</p>
		</div>
	);
}
