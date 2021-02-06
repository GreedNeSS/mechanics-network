import { connect } from "react-redux";
import { addPost, writePost, getProfile } from "../../../redux/profile-reduser";
import Profile from "./Profile";
import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";


class ProfilContainer extends React.Component {
	debugger

	componentDidMount = () => {
		this.props.getProfile(this.props.match.params.userId, this.props.profileId);
	}

	render() {
		return <Profile {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		profileId: state.profile.profileId,
		profile: state.profile.profile,
		newTextPost: state.profile.newTextPost,
		posts: state.profile.posts,
		isAuth: state.auth.isAuth,
	}
}

export default compose(
	connect(mapStateToProps, { addPost, writePost, getProfile }),
	withRouter,
	withAuthRedirect
)(ProfilContainer);