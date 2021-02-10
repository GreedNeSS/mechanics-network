import Preloader from "../../commons/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<ProfileInfo
				profile={props.profile}
				profileStatus={props.profileStatus}
				updateStatus={props.updateStatus}
			/>
			<ProfilePosts
				posts={props.posts}
				addPost={props.addPost}
			/>
		</div>
	)
}

export default Profile;