import { connect } from "react-redux";
import { sendPost, getProfile, getProfileStatus, updateStatus } from "../../../redux/profile-reducer";
import Profile from "./Profile";
import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";


class ProfilContainer extends React.Component {

	getPofileData = () => {
		this.props.getProfile(this.props.match.params.userId, this.props.profileId);
		this.props.getProfileStatus(this.props.match.params.userId, this.props.profileId);
	}

	componentDidMount = () => {
		this.getPofileData();
	}

	componentDidUpdate = (prevProps) => {
		const userId = this.props.match.params.userId;
		if ((prevProps.match.params.userId !== userId) && !userId) {
			this.getPofileData();
		}
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
	connect(mapStateToProps, { sendPost, getProfile, getProfileStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfilContainer);