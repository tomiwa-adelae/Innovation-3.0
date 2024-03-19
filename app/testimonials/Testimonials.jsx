import Image from "next/image";

const Testimonials = () => {
	return (
		<div className="testimonials">
			<div class="card card--bg-primary">
				<div class="card__header">
					<Image
						src={"/image-daniel.jpg"}
						class="card__img"
						alt="Patrick Abrahms"
						width={1000}
						height={1000}
					/>
					<div>
						<h5>Daniel Clifford</h5>
						<p>Verified Graduate</p>
					</div>
				</div>

				<p class="card__quote">
					"I was an EMT for many years before I joined the bootcamp.
					I've been looking to make a transition and have heard some
					people who had an amazing experience here. I signed up for
					the free intro course and found it incredibly fun! I
					enrolled shortly thereafter. The next 12 weeks was the best
					- and most grueling - time of my life. Since completing the
					course, I've successfully switched careers, working as a
					Software Engineer at a VR startup."
				</p>
			</div>

			<div class="card card--bg-light-blue">
				<div class="card__header">
					<Image
						src={"/image-jonathan.jpg"}
						class="card__img"
						alt="Patrick Abrahms"
						width={1000}
						height={1000}
					/>
					<div>
						<h5>Jonathan Walters</h5>
						<p>Verified Graduate</p>
					</div>
				</div>

				<p class="card__quote">
					"I started as a total newbie with virtually no coding
					skills. I now work as a mobile engineer for a big company.
					This was one of the best investments I've made in myself."
				</p>
			</div>

			<div class="card">
				<div class="card__header">
					<Image
						src={"/image-jeanette.jpg"}
						class="card__img"
						alt="Patrick Abrahms"
						width={1000}
						height={1000}
					/>
					<div>
						<h5>Jeanette Harmon</h5>
						<p>Verified Graduate</p>
					</div>
				</div>

				<p class="card__quote">
					"Thank you for the wonderful experience! I now have a job I
					really enjoy, and make a good living while doing something I
					love."
				</p>
			</div>

			<div class="card card--bg-dark">
				<div class="card__header">
					<Image
						src={"/image-patrick.jpg"}
						class="card__img"
						alt="Patrick Abrahms"
						width={1000}
						height={1000}
					/>
					<div>
						<h5>Patrick Abrahms</h5>
						<p>Verified Graduate</p>
					</div>
				</div>

				<p class="card__quote">
					"The staff seem genuinely concerned about my progress which
					I find really refreshing. The program gave me the confidence
					necessary to be able to go out in the world and present
					myself as a capable junior developer. The standard is above
					the rest. You will get the personal attention you need from
					an incredible community of smart and amazing people."
				</p>
			</div>

			<div class="card">
				<div class="card__header">
					<Image
						src={"/image-kira.jpg"}
						class="card__img"
						alt="Patrick Abrahms"
						width={1000}
						height={1000}
					/>
					<div>
						<h5>Kira Whittle</h5>
						<p>Verified Graduate</p>
					</div>
				</div>

				<p class="card__quote">
					"Before joining the bootcamp, I've never written a line of
					code. I needed some structure from professionals who can
					help me learn programming step by step. I was encouraged to
					enroll by a former student of theirs who can only say
					wonderful things about the program. The entire curriculum
					and staff did not disappoint. They were very hands-on and I
					never had to wait long for assistance. The agile team
					project, in particular, was outstanding. It took my learning
					to the next level in a way that no tutorial could ever have.
					In fact, I've often referred to it during interviews as an
					example of my developent experience. It certainly helped me
					land a job as a full-stack developer after receiving
					multiple offers. 100% recommend!"
				</p>
			</div>
		</div>
	);
};

export default Testimonials;
