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
				userId={props.match.params.userId}
				ownId={props.profileId}
				profile={props.profile}
				profileStatus={props.profileStatus}
				updateStatus={props.updateStatus}
				uploadAvatar={props.uploadAvatar}
				editProfile={props.editProfile}
			/>
			{!props.match.params.userId
				? <ProfilePosts posts={props.posts} sendPost={props.sendPost} />
				: ''}
		</div>
	)
}

export default Profile;