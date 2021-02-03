import { connect } from "react-redux";
import { addPost, writePost, setProfile } from "../../../redux/profile-reduser";
import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


class ProfileAjaxContainer extends React.Component {
	debugger

	componentDidMount = () => {
		let userId = this.props.match.params.userId || this.props.profileId;

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setProfile(response.data);
			})

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

export default connect(mapStateToProps, { addPost, writePost, setProfile })(ProfileContainer);