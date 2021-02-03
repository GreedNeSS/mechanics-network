import Preloader from "../../commons/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<ProfileInfo profile={props.profile} />
			<ProfilePosts
				posts={props.posts}
				addPost={props.addPost}
				writePost={props.writePost}
				newTextPost={props.newTextPost}
			/>
		</div>
	)
}

export default Profile;