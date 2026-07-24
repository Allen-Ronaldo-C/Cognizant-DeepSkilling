import React, { Component } from "react";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

    };

    handleSubmit = (event) => {

        event.preventDefault();

        const { name, email, password } = this.state;

        if (name.length < 5) {
            alert("Full Name must be 5 characters long!");
            return;
        }

        if (!(email.includes("@") && email.includes("."))) {
            alert("Email is not valid!");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters!");
            return;
        }

        alert("Registration Successful!");

        this.setState({
            name: "",
            email: "",
            password: ""
        });

    };

    render() {

        return (

            <div className="container">

                <h1>Register Here!!!</h1>

                <form onSubmit={this.handleSubmit}>

                    <table>

                        <tbody>

                            <tr>

                                <td>Name:</td>

                                <td>

                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td>Email:</td>

                                <td>

                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td>Password:</td>

                                <td>

                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />

                                </td>

                            </tr>

                            <tr>

                                <td></td>

                                <td>

                                    <button type="submit">
                                        Submit
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>

        );

    }

}

export default Register;