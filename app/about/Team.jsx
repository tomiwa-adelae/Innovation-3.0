import Image from "next/image";

const Team = ({ teams }) => {
	return (
		<div className="meet-team">
			<div className="head">
				<h3>Meet our team</h3>
			</div>
			<div className="teams">
				{teams.map((person, index) => (
					<div key={index} className="person">
						<Image
							src={person.imagePath}
							alt={person.name}
							height={1000}
							width={1000}
						/>
						<div className="details">
							<h5>{person.name}</h5>
							<span>{person.position}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
