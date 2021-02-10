import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img src={props.profile.photos.large} alt="" />
			</div>
			<div>
				Полное имя: {props.profile.fullName}
			</div>
			<div>
				Обо мне: {props.profile.aboutMe}
			</div>
			<div>
				<ProfileStatus
					status={props.profileStatus}
					updateStatus={props.updateStatus}
				/>
			</div>
			<div>
				Контакты:
				facebook: {props.profile.contacts.facebook},
				vk: {props.profile.contacts.vk},
				twitter: {props.profile.contacts.twitter},
				instagram: {props.profile.contacts.instagram},
				github: {props.profile.contacts.github}
			</div>
		</div>
	)
}

export default ProfileInfo;