import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reduser";
import { authAPI } from "../../API/API";



class AuthContainer extends React.Component {

	componentDidMount() {
		authAPI.getAuthMe()
			.then(response => {
				if (response.resultCode === 0) {
					let { id, email, login } = response.data;
					this.props.setAuthUserData(id, email, login);
				} else {
					console.log(response.messages);
				}
			})
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

const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(AuthContainer)

export default HeaderContainer;