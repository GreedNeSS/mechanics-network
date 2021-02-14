import { connect } from "react-redux";
import { compose } from "redux";
import { userLoginedRedirect } from "../../../hoc/AuthRedirect";
import { login } from "../../../redux/auth-reducer";
import Preloader from "../../commons/Preloader";
import LoginForm from "./LoginForm";
import React from "react";


class Login extends React.Component {
	render() {
		return (
			<div>
				{this.props.isLoading ?
					<Preloader /> :
					null
				}
				<h1>LOGIN!</h1>
				<LoginForm onSubmit={this.props.login} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.auth.isLoading
	}
}

export default compose(
	connect(mapStateToProps, { login }),
	userLoginedRedirect,
)(Login);