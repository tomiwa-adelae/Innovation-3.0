"use client";
const Form = () => {
	return (
		<form>
			<h4>Registration</h4>
			<p>
				<span>Please register for Innovation 3.0</span>
				<span>Fill the form below</span>
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
				<label htmlFor="address">Address</label>
				<input id="address" type="email" />
			</div>
			<div>
				<label htmlFor="expectations">Expectations</label>
				<input id="expectations" type="text" />
			</div>
			<div>
				<button className="btn btn-white-outline">Register</button>
			</div>
		</form>
	);
};

export default Form;
