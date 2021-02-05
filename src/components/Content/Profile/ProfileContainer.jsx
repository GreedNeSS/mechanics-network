import { connect } from "react-redux";
import { addPost, writePost, getProfile } from "../../../redux/profile-reduser";
import Profile from "./Profile";
import React from "react";
import { withRouter } from "react-router-dom";


class ProfileAjaxContainer extends React.Component {
	debugger

	componentDidMount = () => {
		this.props.getProfile(this.props.match.params.userId, this.props.profileId);
	}

	render() {
		return <Profile {...this.props} />
	}
}

const ProfileContainer = withRouter(ProfileAjaxContainer);

let mapStateToProps = (state) => {
	return {
		profileId: state.profile.profileId,
		profile: state.profile.profile,
		newTextPost: state.profile.newTextPost,
		posts: state.profile.posts,
	}
}

export default connect(mapStateToProps, { addPost, writePost, getProfile })(ProfileContainer);