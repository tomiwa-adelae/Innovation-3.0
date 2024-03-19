"use client";
const Form = () => {
	return (
		<form>
			<h4>Get in touch</h4>
			<p>
				<span>You have some questions?</span>
				<span>Free feel to ask them anytime</span>
			</p>
			<div>
				<label htmlFor="name">Name</label>
				<input id="name" type="text" />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" type="email" />
			</div>
			<div>
				<label htmlFor="phoneNumber">Phone number</label>
				<input
					onWheel={(e) => e.target.blur()}
					type="number"
					id="phoneNumber"
				/>
			</div>
			<div>
				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="3"
				></textarea>
			</div>
			<div>
				<button className="btn btn-white-outline">Send message</button>
			</div>
		</form>
	);
};

export default Form;
