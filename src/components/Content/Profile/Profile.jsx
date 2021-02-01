import Preloader from "../../commons/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<ProfileInfo profile={props.profile} />
		</div>
	)
}

export default Profile;