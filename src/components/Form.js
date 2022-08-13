import React, { useState } from "react";

function Form({updateBudget}) {
	const [moneyRequest, setMoneyRequst] = useState(0);

	function onChangeMoney(event) {
		setMoneyRequst(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault();
		updateBudget(moneyRequest);
		setMoneyRequst(0);
	}

	return (
		<div style={{marginLeft: "20px"}}>
			<form onSubmit={handleSubmit} id="form">
				<label htmlFor="money" style={{display: "block"}}>Requeset More Cash! </label>
				<input
					onChange={onChangeMoney}
					type="number"
					id="money"
					value={moneyRequest}
					step="5"
					min="5"
					max="100"
					style={{
						width: "140px",
						marginTop: "10px",
						marginBottom: "10px",
						display: "block"
					}}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Form;