// ------ Dependencies
import React from "react";

// ------ Input form
const InputForm = props => {
    return (
        <form>
            <div className="form-group">
                <input className="col-2 form-control"
                    value={props.search}
                    type="text"
                    name="typeLastName"
                    placeholder="Last name"
                    onChange={props.handleLastNameInput}
                />
                <input className="col-2 form-control"
                    value={props.search}
                    type="text"
                    name="typeFirstName"
                    placeholder="First name"
                    onChange={props.handleFirstNameInput}
                />
            </div>
            <button type="submit" className="btn btn-dark" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    )
}

// ------ Export
export default InputForm