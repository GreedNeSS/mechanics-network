import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { authUser } from "../../redux/auth-reduser";


class AuthContainer extends React.Component {

	componentDidMount() {
		this.props.authUser();
	}

	componentDidUpdate() {
		console.log(this.props);
	}

	render() {
		return <Header {...this.props} />
	}
}


const mapStateToProps = (state) => {

	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	}
}

const HeaderContainer = connect(mapStateToProps, { authUser })(AuthContainer)

export default HeaderContainer;