import { connect } from "react-redux";
import { addPost, writePost, setProfile } from "../../../redux/profile-reduser";
import Profile from "./Profile";
import React from "react";
import axios from "axios";


class ProfileAjaxContainer extends React.Component {

	componentDidMount = () => {
		if (!this.props.profile) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.profileId}`)
				.then(response => {
					this.props.setProfile(response.data);
				})
		}
	}

	componentDidUpdate = () => {
		console.log(this.props);
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
	}
}

let ProfileContainer = connect(mapStateToProps, { addPost, writePost, setProfile })(ProfileAjaxContainer);

export default ProfileContainer;