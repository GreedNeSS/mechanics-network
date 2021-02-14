import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
	return { isAuth: state.auth.isAuth }
}

export const withAuthRedirect = (Component) => {

	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />;
			return (
				<Component {...this.props} />
			)
		}
	}

	return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export const userLoginedRedirect = (Component) => {

	class RedirectComponent extends React.Component {
		render() {
			if (this.props.isAuth) return <Redirect to='/profile' />;
			return (
				<Component {...this.props} />
			)
		}
	}

	return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
