import { connect } from "react-redux";
import { addPost, writePost, getProfile, getProfileStatus, updateStatus } from "../../../redux/profile-reducer";
import Profile from "./Profile";
import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";


class ProfilContainer extends React.Component {
	debugger

	componentDidMount = () => {
		this.props.getProfile(this.props.match.params.userId, this.props.profileId);
		this.props.getProfileStatus(this.props.profileId);
	}

	render() {
		return <Profile {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		profileId: state.profile.profileId,
		profile: state.profile.profile,
		profileStatus: state.profile.profileStatus,
		posts: state.profile.posts,
	}
}

export default compose(
	connect(mapStateToProps, { addPost, getProfile, getProfileStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfilContainer);